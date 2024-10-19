
import { Icon, generic } from "../../index";

/**
 * A component that renders the `nfc-symbol` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nfc-symbol?s=sharp-duotone-solid nfc-symbol}
 * @preview ![nfc-symbol](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xNDYuOCAyOTAuNGwyMy44IDIxLjQgMTc4LjMgMTYwIDE3LjMgMTUuNSAyMC4xLTExLjZDNDYxLjYgNDMyLjEgNTEyIDM0OC44IDUxMiAyNTZzLTUwLjMtMTc2LjEtMTI1LjctMjE5LjdsLTMyIDU1LjRDNDEwLjEgMTI0IDQ0OCAxODYuNCA0NDggMjU2YzAgNjEuNC0yOS41IDExNy4yLTc0LjggMTUxLjdMMjEzLjQgMjY0LjJsLTIzLjgtMjEuNC00Mi43IDQ3LjZ6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xNDUuOCAyNC43bDE3LjMgMTUuNSAxNzguMyAxNjAgMjMuOCAyMS40LTQyLjcgNDcuNi0yMy44LTIxLjRMMTM4LjggMTA0LjRDOTMuNSAxMzguOCA2NCAxOTQuNiA2NCAyNTZjMCA2OS42IDM3LjkgMTMyIDkzLjcgMTY0LjNsLTMyIDU1LjRDNTAuMyA0MzIuMSAwIDM0OC44IDAgMjU2UzUwLjMgNzkuOSAxMjUuNyAzNi4zbDIwLjEtMTEuNnoiLz48L3N2Zz4=|width=32|height=32)
 */
const NfcSymbol: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M146.8 290.4l23.8 21.4 178.3 160 17.3 15.5 20.1-11.6C461.6 432.1 512 348.8 512 256s-50.3-176.1-125.7-219.7l-32 55.4C410.1 124 448 186.4 448 256c0 61.4-29.5 117.2-74.8 151.7L213.4 264.2l-23.8-21.4-42.7 47.6z" />
            <path d="M145.8 24.7l17.3 15.5 178.3 160 23.8 21.4-42.7 47.6-23.8-21.4L138.8 104.4C93.5 138.8 64 194.6 64 256c0 69.6 37.9 132 93.7 164.3l-32 55.4C50.3 432.1 0 348.8 0 256S50.3 79.9 125.7 36.3l20.1-11.6z" />
    </Icon>
);

export default NfcSymbol;