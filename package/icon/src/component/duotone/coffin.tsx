
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `coffin` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coffin?s=duotone coffin}
 * @preview ![coffin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQwNi41MzcgMTE1LjI1TDI5OC43NjYgOS4zNzVDMjkyLjYzOCAzLjM3NSAyODQuMjYzIDAgMjc1LjYzNiAwSDE3Mi4zNjRDMTYzLjczNyAwIDE1NS4zNjIgMy4zNzUgMTQ5LjIzNCA5LjM3NUw0MS40NjMgMTE1LjI1QzMzLjQ2MSAxMjMuMTI1IDMwLjIxMSAxMzQuNjI1IDMyLjk2MSAxNDUuNjI1TDEyMC4xMDMgNDg3Ljc1QzEyMy43MjkgNTAyIDEzNi43MzMgNTEyIDE1MS43MzUgNTEySDI5Ni4zOUMzMTEuMjY3IDUxMiAzMjQuMjcxIDUwMiAzMjcuODk3IDQ4Ny43NUw0MTUuMDM5IDE0NS42MjVDNDE3Ljc4OSAxMzQuNjI1IDQxNC41MzkgMTIzLjEyNSA0MDYuNTM3IDExNS4yNVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Coffin(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path opacity={.4} d="M406.537 115.25L298.766 9.375C292.638 3.375 284.263 0 275.636 0H172.364C163.737 0 155.362 3.375 149.234 9.375L41.463 115.25C33.461 123.125 30.211 134.625 32.961 145.625L120.103 487.75C123.729 502 136.733 512 151.735 512H296.39C311.267 512 324.271 502 327.897 487.75L415.039 145.625C417.789 134.625 414.539 123.125 406.537 115.25Z" />
        </Icon>
    </>
}