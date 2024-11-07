/// <reference types="react" />
import { z } from 'zod';
export declare const ButtonPropsSchema: any;
export type ButtonProps = z.infer<typeof ButtonPropsSchema>;
export declare const ButtonPropsDefaults: {
    readonly text: "";
    readonly url: "";
    readonly fullWidth: false;
    readonly size: "medium";
    readonly buttonStyle: "rounded";
    readonly buttonTextColor: "#FFFFFF";
    readonly buttonBackgroundColor: "#999999";
};
export declare function Button({ style, props }: ButtonProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map