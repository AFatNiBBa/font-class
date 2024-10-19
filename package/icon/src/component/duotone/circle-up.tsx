
import { Icon, generic } from "../../index";

/**
 * A component that renders the `circle-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-up?s=duotone circle-up}
 * @preview ![circle-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDI1NmEyNTYgMjU2IDAgMSAwIDUxMiAwQTI1NiAyNTYgMCAxIDAgMCAyNTZ6bTEyOC0yMi4zYzAtNi4yIDIuNi0xMi4xIDcuMS0xNi4zbDEwNy4xLTk5LjljMy44LTMuNSA4LjctNS41IDEzLjgtNS41czEwLjEgMiAxMy44IDUuNWMzNS43IDMzLjMgNzEuNCA2Ni42IDEwNy4xIDk5LjljNC41IDQuMiA3LjEgMTAuMSA3LjEgMTYuM2MwIDEyLjMtMTAgMjIuMy0yMi4zIDIyLjNMMzA0IDI1NmwwIDk2YzAgMTcuNy0xNC4zIDMyLTMyIDMybC0zMiAwYy0xNy43IDAtMzItMTQuMy0zMi0zMmwwLTk2LTU3LjcgMEMxMzggMjU2IDEyOCAyNDYgMTI4IDIzMy43eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjQyLjIgMTE3LjVMMTM1LjEgMjE3LjRjLTQuNSA0LjItNy4xIDEwLjEtNy4xIDE2LjNjMCAxMi4zIDEwIDIyLjMgMjIuMyAyMi4zbDU3LjcgMCAwIDk2YzAgMTcuNyAxNC4zIDMyIDMyIDMybDMyIDBjMTcuNyAwIDMyLTE0LjMgMzItMzJsMC05NiA1Ny43IDBjMTIuMyAwIDIyLjMtMTAgMjIuMy0yMi4zYzAtNi4yLTIuNi0xMi4xLTcuMS0xNi4zTDI2OS44IDExNy41Yy0zLjgtMy41LTguNy01LjUtMTMuOC01LjVzLTEwLjEgMi0xMy44IDUuNXoiLz48L3N2Zz4=|width=32|height=32)
 */
const CircleUp: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm128-22.3c0-6.2 2.6-12.1 7.1-16.3l107.1-99.9c3.8-3.5 8.7-5.5 13.8-5.5s10.1 2 13.8 5.5c35.7 33.3 71.4 66.6 107.1 99.9c4.5 4.2 7.1 10.1 7.1 16.3c0 12.3-10 22.3-22.3 22.3L304 256l0 96c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-96-57.7 0C138 256 128 246 128 233.7z" />
            <path d="M242.2 117.5L135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3c0 12.3 10 22.3 22.3 22.3l57.7 0 0 96c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-96 57.7 0c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L269.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5z" />
    </Icon>
);

export default CircleUp;