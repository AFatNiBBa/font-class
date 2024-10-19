
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `folder-open` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/folder-open?s=duotone folder-open}
 * @preview ![folder-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCAxNDRWMjI0SDE0Ny43ODFDMTM1LjY1NiAyMjQgMTI0LjU3OCAyMzAuODQ4IDExOS4xNTYgMjQxLjY4OEwwIDQ4MFY4MEMwIDUzLjQ5MiAyMS40OSAzMiA0OCAzMkgyMDhMMjcyIDk2SDQzMkM0NTguNTEgOTYgNDgwIDExNy40OTIgNDgwIDE0NFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNNTcyLjU3OCAyNzAuMzEyTDQ3Ni41NzggNDYyLjMxMkM0NzEuMTYgNDczLjE1MiA0NjAuMDc4IDQ4MCA0NDcuOTYxIDQ4MEgwTDExOS4xNTYgMjQxLjY4OEMxMjQuNTc4IDIzMC44NDggMTM1LjY1NiAyMjQgMTQ3Ljc4MSAyMjRINTQzLjk2MUM1NjcuNzQ2IDIyNCA1ODMuMjE5IDI0OS4wMzEgNTcyLjU3OCAyNzAuMzEyWiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function FolderOpen(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path opacity={.4} d="M480 144V224H147.781C135.656 224 124.578 230.848 119.156 241.688L0 480V80C0 53.492 21.49 32 48 32H208L272 96H432C458.51 96 480 117.492 480 144Z" />
            <path d="M572.578 270.312L476.578 462.312C471.16 473.152 460.078 480 447.961 480H0L119.156 241.688C124.578 230.848 135.656 224 147.781 224H543.961C567.746 224 583.219 249.031 572.578 270.312Z" />
        </Icon>
    </>
}