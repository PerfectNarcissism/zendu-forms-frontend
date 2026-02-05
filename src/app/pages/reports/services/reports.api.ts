import { GetReportsMapper } from "../mappers/get-reports.mapper";
import { defaultReports } from "../static/default-reports";
import { ReportTypeString } from "../types/report";

export class ReportsApi {
    private sourceData = defaultReports;
    async getAllReports(filter?: string, sort?: 'Newest' | 'Oldest'): Promise<ReportTypeString[]> {
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

    async delete(title: string): Promise<void> {
        this.sourceData = this.sourceData.filter((report) => report.title !== title);
    }
}