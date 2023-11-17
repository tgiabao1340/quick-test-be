interface ResponseData {
    data: any[];
    paging: Page
}

interface Page {
    page: number;
    size: number;
    total: number;
}