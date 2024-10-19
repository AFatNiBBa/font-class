
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apple-whole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apple-whole?s=duotone apple-whole}
 * @preview ![apple-whole](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMDggODBsMCAxNmMwIDguOCA3LjIgMTYgMTYgMTZsMTYgMGM0NC4yIDAgODAtMzUuOCA4MC04MGwwLTE2YzAtOC44LTcuMi0xNi0xNi0xNkwyODggMGMtNDQuMiAwLTgwIDM1LjgtODAgODB6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMTIgMTI4QzM1LjcgMTI4IDAgMjExLjcgMCAyODhDMCA0MTYgODAgNTEyIDE2MCA1MTJjMTYuNSAwIDM4LjEtNi42IDUxLjUtMTEuM2M4LjEtMi44IDE2LjktMi44IDI1IDBjMTMuNCA0LjcgMzUgMTEuMyA1MS41IDExLjNjODAgMCAxNjAtOTYgMTYwLTIyNGMwLTc2LjMtMzUuNy0xNjAtMTEyLTE2MGMtMjcuMyAwLTU5LjcgMTAuMy04Mi43IDE5LjNjLTE4LjggNy4zLTM5LjkgNy4zLTU4LjcgMEMxNzEuNyAxMzguMyAxMzkuMyAxMjggMTEyIDEyOHoiLz48L3N2Zz4=|width=32|height=32)
 */
const AppleWhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M208 80l0 16c0 8.8 7.2 16 16 16l16 0c44.2 0 80-35.8 80-80l0-16c0-8.8-7.2-16-16-16L288 0c-44.2 0-80 35.8-80 80z" />
            <path d="M112 128C35.7 128 0 211.7 0 288C0 416 80 512 160 512c16.5 0 38.1-6.6 51.5-11.3c8.1-2.8 16.9-2.8 25 0c13.4 4.7 35 11.3 51.5 11.3c80 0 160-96 160-224c0-76.3-35.7-160-112-160c-27.3 0-59.7 10.3-82.7 19.3c-18.8 7.3-39.9 7.3-58.7 0C171.7 138.3 139.3 128 112 128z" />
    </Icon>
);

export default AppleWhole;