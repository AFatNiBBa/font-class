
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chart-scatter` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chart-scatter?s=duotone chart-scatter}
 * @preview ![chart-scatter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDY0TDAgNDAwYzAgNDQuMiAzNS44IDgwIDgwIDgwbDQwMCAwYzE3LjcgMCAzMi0xNC4zIDMyLTMycy0xNC4zLTMyLTMyLTMyTDgwIDQxNmMtOC44IDAtMTYtNy4yLTE2LTE2TDY0IDY0YzAtMTcuNy0xNC4zLTMyLTMyLTMyUzAgNDYuMyAwIDY0eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzg0IDEyOGEzMiAzMiAwIDEgMSA2NCAwIDMyIDMyIDAgMSAxIC02NCAwek0xNjAgMTYwYTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bTk2IDk2YTMyIDMyIDAgMSAxIDY0IDAgMzIgMzIgMCAxIDEgLTY0IDB6bTEyOCAzMmEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6bS0yMjQgMGEzMiAzMiAwIDEgMSAwIDY0IDMyIDMyIDAgMSAxIDAtNjR6Ii8+PC9zdmc+|width=32|height=32)
 */
const ChartScatter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64c0-17.7-14.3-32-32-32S0 46.3 0 64z" />
            <path d="M384 128a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 96a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-224 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default ChartScatter;