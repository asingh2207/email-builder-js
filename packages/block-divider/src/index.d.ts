/// <reference types="react" />
import { z } from 'zod';
export declare const DividerPropsSchema: any;
export type DividerProps = z.infer<typeof DividerPropsSchema>;
export declare const DividerPropsDefaults: {
    lineHeight: number;
    lineColor: string;
};
export declare function Divider({ style, props }: DividerProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map