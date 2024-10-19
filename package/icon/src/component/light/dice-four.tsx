
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `dice-four` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/dice-four?s=light dice-four}
 * @preview ![dice-four](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQgMzJINjRDMjguNjI1IDMyIDAgNjAuNjI1IDAgOTZWNDE2QzAgNDUxLjM3NSAyOC42MjUgNDgwIDY0IDQ4MEgzODRDNDE5LjM3NSA0ODAgNDQ4IDQ1MS4zNzUgNDQ4IDQxNlY5NkM0NDggNjAuNjI1IDQxOS4zNzUgMzIgMzg0IDMyWk00MTYgNDE2QzQxNiA0MzMuNjI1IDQwMS42MjUgNDQ4IDM4NCA0NDhINjRDNDYuMzc1IDQ0OCAzMiA0MzMuNjI1IDMyIDQxNlY5NkMzMiA3OC4zNzUgNDYuMzc1IDY0IDY0IDY0SDM4NEM0MDEuNjI1IDY0IDQxNiA3OC4zNzUgNDE2IDk2VjQxNlpNMTI4IDEzNkMxMTQuNzUgMTM2IDEwNCAxNDYuNzUgMTA0IDE2MFMxMTQuNzUgMTg0IDEyOCAxODRTMTUyIDE3My4yNSAxNTIgMTYwUzE0MS4yNSAxMzYgMTI4IDEzNlpNMTI4IDMyOEMxMTQuNzUgMzI4IDEwNCAzMzguNzUgMTA0IDM1MlMxMTQuNzUgMzc2IDEyOCAzNzZTMTUyIDM2NS4yNSAxNTIgMzUyUzE0MS4yNSAzMjggMTI4IDMyOFpNMzIwIDEzNkMzMDYuNzUgMTM2IDI5NiAxNDYuNzUgMjk2IDE2MFMzMDYuNzUgMTg0IDMyMCAxODRTMzQ0IDE3My4yNSAzNDQgMTYwUzMzMy4yNSAxMzYgMzIwIDEzNlpNMzIwIDMyOEMzMDYuNzUgMzI4IDI5NiAzMzguNzUgMjk2IDM1MlMzMDYuNzUgMzc2IDMyMCAzNzZTMzQ0IDM2NS4yNSAzNDQgMzUyUzMzMy4yNSAzMjggMzIwIDMyOFogIj48L3BhdGg+PC9zdmc+|width=32|height=32)
 */
export default function DiceFour(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM416 416C416 433.625 401.625 448 384 448H64C46.375 448 32 433.625 32 416V96C32 78.375 46.375 64 64 64H384C401.625 64 416 78.375 416 96V416ZM128 136C114.75 136 104 146.75 104 160S114.75 184 128 184S152 173.25 152 160S141.25 136 128 136ZM128 328C114.75 328 104 338.75 104 352S114.75 376 128 376S152 365.25 152 352S141.25 328 128 328ZM320 136C306.75 136 296 146.75 296 160S306.75 184 320 184S344 173.25 344 160S333.25 136 320 136ZM320 328C306.75 328 296 338.75 296 352S306.75 376 320 376S344 365.25 344 352S333.25 328 320 328Z " />
        </Icon>
    </>
}