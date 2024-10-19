
import { Icon, generic } from "../../index";

/**
 * A component that renders the `location-pin-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/location-pin-lock?s=duotone location-pin-lock}
 * @preview ![location-pin-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0wIDE5MmMwIDg3LjQgMTE3IDI0MyAxNjguMyAzMDcuMmM2LjEgNy43IDE0LjkgMTEuNSAyMy43IDExLjVzMTcuNi0zLjggMjMuNy0xMS41YzExLTEzLjggMjUuMS0zMS43IDQwLjMtNTIuM2wwLTk0LjhjMC0yMy43IDEyLjktNDQuNCAzMi01NS40bDAtMjQuNmMwLTU1LjYgNDAuNS0xMDEuNyA5My42LTExMC41QzM2NyA3MCAyODcuNyAwIDE5MiAwQzg2IDAgMCA4NiAwIDE5MnptMjU2IDBhNjQgNjQgMCAxIDEgLTEyOCAwIDY0IDY0IDAgMSAxIDEyOCAweiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMzY4IDI3MmwwIDQ4IDY0IDAgMC00OGMwLTE3LjctMTQuMy0zMi0zMi0zMnMtMzIgMTQuMy0zMiAzMnptLTQ4IDQ4bDAtNDhjMC00NC4yIDM1LjgtODAgODAtODBzODAgMzUuOCA4MCA4MGwwIDQ4YzE3LjcgMCAzMiAxNC4zIDMyIDMybDAgMTI4YzAgMTcuNy0xNC4zIDMyLTMyIDMybC0xNjAgMGMtMTcuNyAwLTMyLTE0LjMtMzItMzJsMC0xMjhjMC0xNy43IDE0LjMtMzIgMzItMzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const LocationPinLock: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192c0 87.4 117 243 168.3 307.2c6.1 7.7 14.9 11.5 23.7 11.5s17.6-3.8 23.7-11.5c11-13.8 25.1-31.7 40.3-52.3l0-94.8c0-23.7 12.9-44.4 32-55.4l0-24.6c0-55.6 40.5-101.7 93.6-110.5C367 70 287.7 0 192 0C86 0 0 86 0 192zm256 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
            <path d="M368 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default LocationPinLock;