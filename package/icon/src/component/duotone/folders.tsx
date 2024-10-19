
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folders` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folders?s=duotone folders}
 * @preview ![folders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYwOCAxNDRWMzM2QzYwOCAzNjIuNSA1ODYuNSAzODQgNTYwIDM4NEgxNzZDMTQ5LjUgMzg0IDEyOCAzNjIuNSAxMjggMzM2VjgwQzEyOCA1My41IDE0OS41IDMyIDE3NiAzMkgzMDRMMzY4IDk2SDU2MEM1ODYuNSA5NiA2MDggMTE3LjUgNjA4IDE0NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNODAgNDAwVjE2MEM1My40OSAxNjAgMzIgMTgxLjQ5MiAzMiAyMDhWNDE2QzMyIDQ1MS4zNDYgNjAuNjU0IDQ4MCA5NiA0ODBINDY0QzQ5MC41MSA0ODAgNTEyIDQ1OC41MDggNTEyIDQzMkgxMTJDOTQuMzI2IDQzMiA4MCA0MTcuNjcyIDgwIDQwMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Folders(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path opacity={.4} d="M608 144V336C608 362.5 586.5 384 560 384H176C149.5 384 128 362.5 128 336V80C128 53.5 149.5 32 176 32H304L368 96H560C586.5 96 608 117.5 608 144Z" />
            <path d="M80 400V160C53.49 160 32 181.492 32 208V416C32 451.346 60.654 480 96 480H464C490.51 480 512 458.508 512 432H112C94.326 432 80 417.672 80 400Z" />
        </Icon>
    </>
}