
import { Icon, generic } from "../../index";

/**
 * A component that renders the `music` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=duotone music}
 * @preview ![music](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0xMjggMTI4bDAgNzIgMCAxNTYuNmMzNy4zIDExIDY0IDQwLjYgNjQgNzUuNGwwLTIwOC4yTDQ0OCAxNDdsMCAxNDUuNWMzNy4zIDExIDY0IDQwLjYgNjQgNzUuNGwwLTI2NCAwLTcyYzAtMTAuMS00LjgtMTkuNi0xMi45LTI1LjdDNDkzLjUgMi4yIDQ4Ni44IDAgNDgwIDBjLTMuMSAwLTYuMiAuNC05LjIgMS4zbC0zMjAgOTZDMTM3LjMgMTAxLjQgMTI4IDExMy45IDEyOCAxMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik00MTYgNDQ4YzUzIDAgOTYtMzUuOCA5Ni04MHMtNDMtODAtOTYtODBzLTk2IDM1LjgtOTYgODBzNDMgODAgOTYgODB6TTk2IDUxMmM1MyAwIDk2LTM1LjggOTYtODBzLTQzLTgwLTk2LTgwcy05NiAzNS44LTk2IDgwczQzIDgwIDk2IDgweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M128 128l0 72 0 156.6c37.3 11 64 40.6 64 75.4l0-208.2L448 147l0 145.5c37.3 11 64 40.6 64 75.4l0-264 0-72c0-10.1-4.8-19.6-12.9-25.7C493.5 2.2 486.8 0 480 0c-3.1 0-6.2 .4-9.2 1.3l-320 96C137.3 101.4 128 113.9 128 128z" />
            <path d="M416 448c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80zM96 512c53 0 96-35.8 96-80s-43-80-96-80s-96 35.8-96 80s43 80 96 80z" />
    </Icon>
);

export default Music;