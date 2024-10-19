
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lamp` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lamp?s=duotone lamp}
 * @preview ![lamp](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiA0MzJjMCAyNC40IDguMyA0NC42IDE2LjQgNTguN2M4LjUgMTQuNyAyNS4yIDIxLjMgNDIuMSAyMS4zbDEzOSAwYzE3IDAgMzMuNi02LjYgNDIuMS0yMS4zYzguMS0xNCAxNi40LTM0LjMgMTYuNC01OC43YzAtNjEuNS02NC0xMjgtNjQtMTI4bDAtNDgtMTI4IDAgMCA0OHMtNjQgNjYuNS02NCAxMjh6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMTIgMEM5OS4xIDAgODcuNCA3LjggODIuNSAxOS43bC04MCAxOTJjLTQuMSA5LjktMyAyMS4yIDIuOSAzMC4xUzIxLjMgMjU2IDMyIDI1NmwzODQgMGMxMC43IDAgMjAuNy01LjMgMjYuNi0xNC4yczctMjAuMiAyLjktMzAuMWwtODAtMTkyQzM2MC42IDcuOCAzNDguOSAwIDMzNiAwTDExMiAweiIvPjwvc3ZnPg==|width=32|height=32)
 */
const Lamp: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 432c0 24.4 8.3 44.6 16.4 58.7c8.5 14.7 25.2 21.3 42.1 21.3l139 0c17 0 33.6-6.6 42.1-21.3c8.1-14 16.4-34.3 16.4-58.7c0-61.5-64-128-64-128l0-48-128 0 0 48s-64 66.5-64 128z" />
            <path d="M112 0C99.1 0 87.4 7.8 82.5 19.7l-80 192c-4.1 9.9-3 21.2 2.9 30.1S21.3 256 32 256l384 0c10.7 0 20.7-5.3 26.6-14.2s7-20.2 2.9-30.1l-80-192C360.6 7.8 348.9 0 336 0L112 0z" />
    </Icon>
);

export default Lamp;