
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-slash?s=duotone trash-slash}
 * @preview ![trash-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05OC40IDUxLjhDMTAzLjIgNDAuMiAxMTQuNiAzMiAxMjggMzJsOTYgMCA3LjItMTQuM0MyMzYuNiA2LjggMjQ3LjcgMCAyNTkuOCAwTDM4MC4yIDBjMTIuMSAwIDIzLjIgNi44IDI4LjYgMTcuN0w0MTYgMzJsOTYgMGMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwxNTQuOCA5NkMxMzYgODEuMyAxMTcuMiA2Ni41IDk4LjQgNTEuOHptMzQuMSAxNDguNkw0ODggNDgwLjVDNDgxLjIgNDk5IDQ2My41IDUxMiA0NDIuOSA1MTJsLTI0NS44IDBjLTI1LjMgMC00Ni4zLTE5LjctNDcuOS00NUwxMzIuNSAyMDAuNHpNMTk1LjYgMTI4TDUxMiAxMjggNDk3LjIgMzY0LjRDMzk2LjcgMjg1LjYgMjk2LjEgMjA2LjggMTk1LjYgMTI4eiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNNS4xIDkuMkMxMy4zLTEuMiAyOC40LTMuMSAzOC44IDUuMWw1OTIgNDY0YzEwLjQgOC4yIDEyLjMgMjMuMyA0LjEgMzMuN3MtMjMuMyAxMi4zLTMzLjcgNC4xTDkuMiA0Mi45Qy0xLjIgMzQuNy0zLjEgMTkuNiA1LjEgOS4yeiIvPjwvc3ZnPg==|width=32|height=32)
 */
const TrashSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M98.4 51.8C103.2 40.2 114.6 32 128 32l96 0 7.2-14.3C236.6 6.8 247.7 0 259.8 0L380.2 0c12.1 0 23.2 6.8 28.6 17.7L416 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L154.8 96C136 81.3 117.2 66.5 98.4 51.8zm34.1 148.6L488 480.5C481.2 499 463.5 512 442.9 512l-245.8 0c-25.3 0-46.3-19.7-47.9-45L132.5 200.4zM195.6 128L512 128 497.2 364.4C396.7 285.6 296.1 206.8 195.6 128z" />
            <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default TrashSlash;