
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `facebook-messenger` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/facebook-messenger?s=brands facebook-messenger}
 * @preview ![facebook-messenger](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuNTUgOEMxMTYuNTIgOCA4IDExMC4zNCA4IDI0OC41N2MwIDcyLjMgMjkuNzEgMTM0Ljc4IDc4LjA3IDE3Ny45NCA4LjM1IDcuNTEgNi42MyAxMS44NiA4LjA1IDU4LjIzQTE5LjkyIDE5LjkyIDAgMCAwIDEyMiA1MDIuMzFjNTIuOTEtMjMuMyA1My41OS0yNS4xNCA2Mi41Ni0yMi43QzMzNy44NSA1MjEuOCA1MDQgNDIzLjcgNTA0IDI0OC41NyA1MDQgMTEwLjM0IDM5Ni41OSA4IDI1Ni41NSA4em0xNDkuMjQgMTg1LjEzbC03MyAxMTUuNTdhMzcuMzcgMzcuMzcgMCAwIDEtNTMuOTEgOS45M2wtNTguMDgtNDMuNDdhMTUgMTUgMCAwIDAtMTggMGwtNzguMzcgNTkuNDRjLTEwLjQ2IDcuOTMtMjQuMTYtNC42LTE3LjExLTE1LjY3bDczLTExNS41N2EzNy4zNiAzNy4zNiAwIDAgMSA1My45MS05LjkzbDU4LjA2IDQzLjQ2YTE1IDE1IDAgMCAwIDE4IDBsNzguNDEtNTkuMzhjMTAuNDQtNy45OCAyNC4xNCA0LjU0IDE3LjA5IDE1LjYyeiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function FacebookMessenger(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
        </Icon>
    </>
}