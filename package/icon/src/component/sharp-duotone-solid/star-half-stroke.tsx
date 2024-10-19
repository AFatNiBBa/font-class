
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-half-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half-stroke?s=sharp-duotone-solid star-half-stroke}
 * @preview ![star-half-stroke](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48ZGVmcz48c3R5bGU+LmZhLXNlY29uZGFyeXtvcGFjaXR5Oi40fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1zZWNvbmRhcnkiIGQ9Ik0yODggLjFjMCA0MC4xIDAgODAuMSAwIDEyMC4xYzEyLjQgMjMuMyAyNC43IDQ2LjYgMzcgNzBsMTIuOSAyNC40IDI3LjEgNC43IDc4LjEgMTMuNS01NS4yIDU2LjgtMTkuMiAxOS43IDMuOSAyNy4zIDExLjMgNzguNC03MS4xLTM1LTI0LjctMTIuMWMtLjEgMjAuOC0uMSA0MS42LS4xIDYyLjNjMzUuMiAxNy40IDcwLjQgMzQuNyAxMDUuNSA1MS45TDQ1NC40IDUxMmwtOS43LTY3LjJMNDI4IDMyOC41bDgxLjktODQuMyA0Ny4zLTQ4LjdMNDkwLjQgMTg0IDM3NC42IDE2NCAzMTkuNyA2MEMzMDkuMiA0MCAyOTguNiAyMCAyODggLjF6Ii8+PHBhdGggY2xhc3M9ImZhLXByaW1hcnkiIGQ9Ik0xMjEuNyA1MTJMMjg4IDQzMC4yIDI4OCAuMSAyMDEuNSAxNjQgMTguOSAxOTUuNiAxNDguMSAzMjguNSAxMjEuNyA1MTJ6Ii8+PC9zdmc+|width=32|height=32)
 */
const StarHalfStroke: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 .1c0 40.1 0 80.1 0 120.1c12.4 23.3 24.7 46.6 37 70l12.9 24.4 27.1 4.7 78.1 13.5-55.2 56.8-19.2 19.7 3.9 27.3 11.3 78.4-71.1-35-24.7-12.1c-.1 20.8-.1 41.6-.1 62.3c35.2 17.4 70.4 34.7 105.5 51.9L454.4 512l-9.7-67.2L428 328.5l81.9-84.3 47.3-48.7L490.4 184 374.6 164 319.7 60C309.2 40 298.6 20 288 .1z" />
            <path d="M121.7 512L288 430.2 288 .1 201.5 164 18.9 195.6 148.1 328.5 121.7 512z" />
    </Icon>
);

export default StarHalfStroke;