import { ReportType } from "../types/report";
import { format } from 'date-fns';

export class GetReportsMapper {
    static toFront(data: ReportType[]) {
        return data.map(report => ({
            ...report,
            created: format(report.created, 'MMMM dd, yyyy'),
            modified: format(report.modified, 'MMMM dd, yyyy')
        }))
    }
}