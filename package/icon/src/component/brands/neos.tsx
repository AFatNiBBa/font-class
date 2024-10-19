
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `neos` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/neos?s=brands neos}
 * @preview ![neos](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTUuNDQgNTEyaC05NS4xMUwyMTIuMTIgMzU3LjQ2djkxLjFMMTI1LjY5IDUxMkgyOFYyOS44Mkw2OC40NyAwaDEwOC4wNWwxMjMuNzQgMTc2LjEzVjYzLjQ1TDM4Ni42OSAwaDk3LjY5djQ2MS41ek0zOC43NyAzNS4yN1Y0OTZsNzItNTIuODhWMTk0bDIxNS41IDMwNy42NGg4NC43OWw1Mi4zNS0zOC4xN2gtNzguMjdMNjkgMTN6bTgyLjU0IDQ2Ni42MWw4MC01OC43OHYtMTAxbC03OS43Ni0xMTQuNHYyMjAuOTRMNDkgNTAxLjg5aDcyLjM0ek04MC42MyAxMC43N2wzMTAuNiA0NDIuNTdoODIuMzdWMTAuNzdoLTc5Ljc1djMxNy41NkwxNzAuOTEgMTAuNzd6TTMxMSAxOTEuNjVsNzIgMTAyLjgxVjE1LjkzbC03MiA1M3YxMjIuNzJ6Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Neos(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z" />
        </Icon>
    </>
}