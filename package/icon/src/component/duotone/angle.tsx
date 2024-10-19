
import { Icon, generic } from "../../index";

/**
 * A component that renders the `angle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/angle?s=duotone angle}
 * @preview ![angle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yMTguNSAyMTguMWMyMS40IDE3LjQgNDAuNCAzNy43IDU2LjIgNjAuNGw0MC44LTI1LjNjLTIwLjctMzAuMS00Ni4xLTU2LjctNzUuMS03OC45bC0yMS45IDQzLjh6bTczLjEgODcuNmMxMy4zIDI0LjIgMjMuMyA1MC41IDI5LjUgNzguM2w0OSAwYy03LTM3LTE5LjgtNzEuOS0zNy42LTEwMy43bC00MC44IDI1LjN6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0yMzguMyAzNS40YzE1LjggNy45IDIyLjIgMjcuMSAxNC4zIDQyLjlMODMuOCA0MTYgNDE2IDQxNmMxNy43IDAgMzIgMTQuMyAzMiAzMnMtMTQuMyAzMi0zMiAzMkwzMiA0ODBjLTExLjEgMC0yMS40LTUuNy0yNy4yLTE1LjJzLTYuNC0yMS4yLTEuNC0zMS4xbDE5Mi0zODRjNy45LTE1LjggMjcuMS0yMi4yIDQyLjktMTQuM3oiLz48L3N2Zz4=|width=32|height=32)
 */
const Angle: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M218.5 218.1c21.4 17.4 40.4 37.7 56.2 60.4l40.8-25.3c-20.7-30.1-46.1-56.7-75.1-78.9l-21.9 43.8zm73.1 87.6c13.3 24.2 23.3 50.5 29.5 78.3l49 0c-7-37-19.8-71.9-37.6-103.7l-40.8 25.3z" />
            <path d="M238.3 35.4c15.8 7.9 22.2 27.1 14.3 42.9L83.8 416 416 416c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480c-11.1 0-21.4-5.7-27.2-15.2s-6.4-21.2-1.4-31.1l192-384c7.9-15.8 27.1-22.2 42.9-14.3z" />
    </Icon>
);

export default Angle;