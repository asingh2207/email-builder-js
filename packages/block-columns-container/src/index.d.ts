/// <reference types="react" />
import { z } from 'zod';
export declare const ColumnsContainerPropsSchema: any;
type TColumn = JSX.Element | JSX.Element[] | null;
export type ColumnsContainerProps = z.infer<typeof ColumnsContainerPropsSchema> & {
    columns?: TColumn[];
};
export declare function ColumnsContainer({ style, columns, props }: ColumnsContainerProps): JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map