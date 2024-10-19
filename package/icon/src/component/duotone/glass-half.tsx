
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `glass-half` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glass-half?s=duotone glass-half}
 * @preview ![glass-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMxNy42NDIgNjRMMjkwLjIyMiA0NDhIOTMuNzc3TDY2LjM1MSA2NEgzMTcuNjQyTTM1MS45NTYgMEgzMi4wNDJDMjMuMTY5IDAgMTQuNzk4IDMuNjI1IDguNjczIDEwLjEyNUMyLjY3NSAxNi41IC0wLjQ0OCAyNS4xMjUgMC4wNTIgMzQuMDAxTDMyLjA0MiA0ODJDMzMuMTY3IDQ5OC44NzUgNDcuMTYzIDUxMiA2NC4wMzQgNTEySDMxOS45NjRDMzM2LjgzNSA1MTIgMzUwLjgzMSA0OTguODc1IDM1MS45NTYgNDgyTDM4My45NDcgMzRDMzg0LjQ0NyAyNS4xMjUgMzgxLjMyMyAxNi41IDM3NS4zMjUgMTAuMTI1QzM2OS4yIDMuNjI1IDM2MC44MjkgMCAzNTEuOTU2IDBMMzUxLjk1NiAwWiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMDMuODY3IDI1NkwyOTAuMTU4IDQ0OEg5My43MTNMODAgMjU2SDMwMy44NjdaIiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function GlassHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path opacity={.4} d="M317.642 64L290.222 448H93.777L66.351 64H317.642M351.956 0H32.042C23.169 0 14.798 3.625 8.673 10.125C2.675 16.5 -0.448 25.125 0.052 34.001L32.042 482C33.167 498.875 47.163 512 64.034 512H319.964C336.835 512 350.831 498.875 351.956 482L383.947 34C384.447 25.125 381.323 16.5 375.325 10.125C369.2 3.625 360.829 0 351.956 0L351.956 0Z" />
            <path d="M303.867 256L290.158 448H93.713L80 256H303.867Z" />
        </Icon>
    </>
}