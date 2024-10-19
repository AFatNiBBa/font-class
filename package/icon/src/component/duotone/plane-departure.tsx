
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-departure` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-departure?s=duotone plane-departure}
 * @preview ![plane-departure](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDQ4MGMwLTE3LjcgMTQuMy0zMiAzMi0zMmw1NzYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA1MTJjLTE3LjcgMC0zMi0xNC4zLTMyLTMyeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzgxIDExNC45TDE4Ni4xIDQxLjhjLTE2LjctNi4yLTM1LjItNS4zLTUxLjEgMi43TDg5LjEgNjcuNEM3OCA3MyA3Ny4yIDg4LjUgODcuNiA5NS4ybDE0Ni45IDk0LjVMMTM2IDI0MCA3Ny44IDIxNC4xYy04LjctMy45LTE4LjgtMy43LTI3LjMgLjZMMTguMyAyMzAuOGMtOS4zIDQuNy0xMS44IDE2LjgtNSAyNC43bDczLjEgODUuM2M2LjEgNy4xIDE1IDExLjIgMjQuMyAxMS4ybDEzNy43IDBjNSAwIDkuOS0xLjIgMTQuMy0zLjRMNTM1LjYgMjEyLjJjNDYuNS0yMy4zIDgyLjUtNjMuMyAxMDAuOC0xMTJDNjQ1LjkgNzUgNjI3LjIgNDggNjAwLjIgNDhsLTU3LjQgMGMtMjAuMiAwLTQwLjIgNC44LTU4LjIgMTRMMzgxIDExNC45eiIvPjwvc3ZnPg==|width=32|height=32)
 */
const PlaneDeparture: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 480c0-17.7 14.3-32 32-32l576 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z" />
            <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2l137.7 0c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48l-57.4 0c-20.2 0-40.2 4.8-58.2 14L381 114.9z" />
    </Icon>
);

export default PlaneDeparture;