export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).format(new Date(date))
}

export const getCurrentYearRange = (): string => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    return `${year}-${month}-01,${year}-12-31`
}
