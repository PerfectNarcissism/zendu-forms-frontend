import { GetReportsMapper } from "../mappers/get-reports.mapper";
import { defaultReports } from "../static/default-reports";

export class ReportsApi {
    private readonly sourceData = defaultReports;
    async getAllReports(filter?: string, sort?: 'Newest' | 'Oldest'): Promise<any> {
        let filteredData = [...this.sourceData];

        if (filter) {
            const term = filter.toLowerCase().trim();

            if (term) {
                filteredData = filteredData.filter(item =>
                    Object.values(item).some(value =>
                        String(value).toLowerCase().includes(term)
                    )
                );
            }
        }

        if (sort) {
            filteredData.sort((a, b) => {
                const dateA = new Date(a.created).getTime();
                const dateB = new Date(b.created).getTime();
                return sort === 'Newest' ? dateB - dateA : dateA - dateB;
            });
        }

        return new Promise((resolve) => {
            resolve(GetReportsMapper.toFront(filteredData));
        });
    }
}