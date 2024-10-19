
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `y` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/y?s=regular y}
 * @preview ![y](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNzguMTYgODIuNDU1TDIyNC4wMDQgMzAxLjA3M1Y0NDguMDE4QzIyNC4wMDQgNDY1LjcwNSAyMDkuNjkxIDQ4MC4wMTggMTkyLjAwNCA0ODAuMDE4UzE2MC4wMDQgNDY1LjcwNSAxNjAuMDA0IDQ0OC4wMThWMzAxLjA3M0w1Ljg0OCA4Mi40NTVDLTQuMzQgNjguMDE4IC0wLjg3MSA0OC4wNDkgMTMuNTY2IDM3Ljg2MkMyNy45NzMgMjcuNzA2IDQ3Ljk0MSAzMS4xNDMgNTguMTYgNDUuNThMMTkyLjAwNCAyMzUuMzkzTDMyNS44NDggNDUuNThDMzM2LjAzNSAzMS4xNDMgMzU2LjAzNSAyNy43MDUgMzcwLjQ0MSAzNy44NjJDMzg0Ljg3OSA0OC4wNDkgMzg4LjM0OCA2OC4wMTggMzc4LjE2IDgyLjQ1NVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Y(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M378.16 82.455L224.004 301.073V448.018C224.004 465.705 209.691 480.018 192.004 480.018S160.004 465.705 160.004 448.018V301.073L5.848 82.455C-4.34 68.018 -0.871 48.049 13.566 37.862C27.973 27.706 47.941 31.143 58.16 45.58L192.004 235.393L325.848 45.58C336.035 31.143 356.035 27.705 370.441 37.862C384.879 48.049 388.348 68.018 378.16 82.455Z" />
        </Icon>
    </>
}