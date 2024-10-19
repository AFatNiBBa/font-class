
import { Icon, generic } from "../../index";

/**
 * A component that renders the `flag` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flag?s=duotone flag}
 * @preview ![flag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik02NCA0OGw2OS0xNy4yYzM4LjEtOS41IDc4LjMtNS4xIDExMy41IDEyLjVjNDYuMyAyMy4yIDEwMC44IDIzLjIgMTQ3LjEgMGw5LjYtNC44QzQyMy44IDI4LjEgNDQ4IDQzLjEgNDQ4IDY2LjFsMCAyNDcuN2MwIDEzLjMtOC4zIDI1LjMtMjAuOCAzMGwtMzQuNyAxM2MtMjAuMSA3LjYtNDEuMyAxMS4zLTYyLjMgMTEuM2MtMjcuMyAwLTU0LjUtNi4zLTc5LjQtMTguN2MtMzcuOS0xOS04MS4zLTIzLjctMTIyLjUtMTMuNEw2NCAzNTIgNjQgNDh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0zMiAwQzQ5LjcgMCA2NCAxNC4zIDY0IDMybDAgNDQ4YzAgMTcuNy0xNC4zIDMyLTMyIDMycy0zMi0xNC4zLTMyLTMyTDAgMzJDMCAxNC4zIDE0LjMgMCAzMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Flag: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1l0 247.7c0 13.3-8.3 25.3-20.8 30l-34.7 13c-20.1 7.6-41.3 11.3-62.3 11.3c-27.3 0-54.5-6.3-79.4-18.7c-37.9-19-81.3-23.7-122.5-13.4L64 352 64 48z" />
            <path d="M32 0C49.7 0 64 14.3 64 32l0 448c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 32C0 14.3 14.3 0 32 0z" />
    </Icon>
);

export default Flag;