export const filterJobs = (filters, jobData) => {
  const filteredJobs = jobData.filter((item) => {
    return (
      (filters?.roles?.length > 0 && filters?.roles?.includes(item.jobRole)) ||
      (filters?.location?.length > 0 &&
        filters?.location?.includes(item.location)) ||
      (item.minExp < filters?.experience &&
        filters?.experience < item.maxExp) ||
      filters?.basePay < item.minJdSalary ||
      item.companyName
        .toLowerCase()
        .includes(filters?.companyName?.toLowerCase())
    )
  })

  return filteredJobs
}
