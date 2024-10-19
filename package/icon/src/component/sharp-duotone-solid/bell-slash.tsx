
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-slash?s=sharp-duotone-solid bell-slash}
 * @preview ![bell-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik05NiAzNjhsNjQtNzIgMC03My45TDQwNi4yIDQxNiA5NiA0MTZsMC00OHptODkuNS0yNDYuN2MyMy0zNS41IDU5LjYtNjEuNCAxMDIuNS03MC4xTDI4OCAwbDY0IDAgMCA1MS4yQzQyNSA2NiA0ODAgMTMwLjYgNDgwIDIwOGwwIDg4IDY0IDcyIDAgMzEuNkM0MjQuNSAzMDYuOCAzMDUgMjE0IDE4NS41IDEyMS4zek0yNTYgNDQ4bDY0IDAgNjQgMGMwIDE3LTYuNyAzMy4zLTE4LjcgNDUuM3MtMjguMyAxOC43LTQ1LjMgMTguN3MtMzMuMy02LjctNDUuMy0xOC43cy0xOC43LTI4LjMtMTguNy00NS4zeiIvPjxwYXRoIGNsYXNzPSJmYS1wcmltYXJ5IiBkPSJNMjkuNCAuMWwxOSAxNC43TDYyMC45IDQ1OS4zbDE5IDE0LjctMjkuNCAzNy45LTE5LTE0LjdMMTkgNTIuNyAwIDM4IDI5LjQgLjF6Ii8+PC9zdmc+|width=32|height=32)
 */
const BellSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 368l64-72 0-73.9L406.2 416 96 416l0-48zm89.5-246.7c23-35.5 59.6-61.4 102.5-70.1L288 0l64 0 0 51.2C425 66 480 130.6 480 208l0 88 64 72 0 31.6C424.5 306.8 305 214 185.5 121.3zM256 448l64 0 64 0c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3z" />
            <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default BellSlash;