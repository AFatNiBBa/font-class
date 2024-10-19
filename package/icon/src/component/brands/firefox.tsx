
import { Icon } from "../../index";

/**
 * A component that renders the `firefox` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/firefox?s=brands firefox}
 * @preview ![firefox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTAzLjUyLDI0MS40OGMtLjEyLTEuNTYtLjI0LTMuMTItLjI0LTQuNjh2LS4xMmwtLjM2LTQuNjh2LS4xMmEyNDUuODYsMjQ1Ljg2LDAsMCwwLTcuMzItNDEuMTVjMC0uMTIsMC0uMTItLjEyLS4yNGwtMS4wOC00Yy0uMTItLjI0LS4xMi0uNDgtLjI0LS42LS4zNi0xLjItLjcyLTIuNTItMS4wOC0zLjcyLS4xMi0uMjQtLjEyLS42LS4yNC0uODQtLjM2LTEuMi0uNzItMi40LTEuMDgtMy40OC0uMTItLjM2LS4yNC0uNi0uMzYtMS0uMzYtMS4yLS43Mi0yLjI4LTEuMi0zLjQ4bC0uMzYtMS4wOGMtLjM2LTEuMDgtLjg0LTIuMjgtMS4yLTMuMzZhOC4yNyw4LjI3LDAsMCwwLS4zNi0xYy0uNDgtMS4wOC0uODQtMi4yOC0xLjMyLTMuMzYtLjEyLS4yNC0uMjQtLjYtLjM2LS44NC0uNDgtMS4yLTEtMi4yOC0xLjQ0LTMuNDgsMC0uMTItLjEyLS4yNC0uMTItLjM2LTEuNTYtMy44NC0zLjI0LTcuNjgtNS0xMS40bC0uMzYtLjcyYy0uNDgtMS0uODQtMS44LTEuMzItMi42NC0uMjQtLjQ4LS40OC0xLjA4LS43Mi0xLjU2LS4zNi0uODQtLjg0LTEuNTYtMS4yLTIuNC0uMzYtLjYtLjYtMS4yLTEtMS44cy0uODQtMS40NC0xLjItMi4yOGMtLjM2LS42LS43Mi0xLjMyLTEuMDgtMS45MnMtLjg0LTEuNDQtMS4yLTIuMTZhMTguMDcsMTguMDcsMCwwLDAtMS4yLTJjLS4zNi0uNzItLjg0LTEuMzItMS4yLTJzLS44NC0xLjMyLTEuMi0yLS44NC0xLjMyLTEuMi0xLjkyLS44NC0xLjQ0LTEuMzItMi4xNmExNS42MywxNS42MywwLDAsMC0xLjItMS44TDQ2My4yLDExOWExNS42MywxNS42MywwLDAsMC0xLjItMS44Yy0uNDgtLjcyLTEuMDgtMS41Ni0xLjU2LTIuMjgtLjM2LS40OC0uNzItMS4wOC0xLjA4LTEuNTZsLTEuOC0yLjUyYy0uMzYtLjQ4LS42LS44NC0xLTEuMzItMS0xLjMyLTEuOC0yLjUyLTIuNzYtMy43MmEyNDguNzYsMjQ4Ljc2LDAsMCwwLTIzLjUxLTI2LjY0QTE4Ni44MiwxODYuODIsMCwwLDAsNDEyLDYyLjQ2Yy00LTMuNDgtOC4xNi02LjcyLTEyLjQ4LTkuODRhMTYyLjQ5LDE2Mi40OSwwLDAsMC0yNC42LTE1LjEyYy0yLjQtMS4zMi00LjgtMi41Mi03LjItMy43MmEyNTQsMjU0LDAsMCwwLTU1LjQzLTE5LjU2Yy0xLjkyLS4zNi0zLjg0LS44NC01LjY0LTEuMmgtLjEyYy0xLS4xMi0xLjgtLjM2LTIuNzYtLjQ4YTIzNi4zNSwyMzYuMzUsMCwwLDAtMzgtNEgyNTUuMTRhMjM0LjYyLDIzNC42MiwwLDAsMC00NS40OCw1Yy0zMy41OSw3LjA4LTYzLjIzLDIxLjI0LTgyLjkxLDM5LTEuMDgsMS0xLjkyLDEuNjgtMi40LDIuMTZsLS40OC40OEgxMjRsLS4xMi4xMi4xMi0uMTJhLjEyLjEyLDAsMCwwLC4xMi0uMTJsLS4xMi4xMmEuNDIuNDIsMCwwLDEsLjI0LS4xMmMxNC42NC04Ljc2LDM0LjkyLTE2LDQ5LjQ0LTE5LjU2bDUuODgtMS40NGMuMzYtLjEyLjg0LS4xMiwxLjItLjI0LDEuNjgtLjM2LDMuMzYtLjcyLDUuMTYtMS4wOC4yNCwwLC42LS4xMi44NC0uMTJDMjUwLjk0LDIwLjk0LDMxOS4zNCw0MC4xNCwzNjcsODUuNjFhMTcxLjQ5LDE3MS40OSwwLDAsMSwyNi44OCwzMi43NmMzMC4zNiw0OS4yLDI3LjQ4LDExMS4xMSwzLjg0LDE0Ny41OS0zNC40NCw1My0xMTEuMzUsNzEuMjctMTU5LDI0Ljg0YTg0LjE5LDg0LjE5LDAsMCwxLTI1LjU2LTU5LDc0LjA1LDc0LjA1LDAsMCwxLDYuMjQtMzFjMS42OC0zLjg0LDEzLjA4LTI1LjY3LDE4LjI0LTI0LjU5LTEzLjA4LTIuNzYtMzcuNTUsMi42NC01NC43MSwyOC4xOS0xNS4zNiwyMi45Mi0xNC41Miw1OC4yLTUsODMuMjhhMTMyLjg1LDEzMi44NSwwLDAsMS0xMi4xMi0zOS4yNGMtMTIuMjQtODIuNTUsNDMuMzEtMTUzLDk0LjMxLTE3MC41MS0yNy40OC0yNC05Ni40Ny0yMi4zMS0xNDcuNzEsMTUuMzYtMjkuODgsMjItNTEuMjMsNTMuMTYtNjIuNTEsOTAuMzYsMS42OC0yMC44OCw5LjYtNTIuMDgsMjUuOC04My44OC0xNy4xNiw4Ljg4LTM5LDM3LTQ5LjgsNjIuODgtMTUuNiwzNy40My0yMSw4Mi4xOS0xNi4wOCwxMjQuNzkuMzYsMy4yNC43Miw2LjM2LDEuMDgsOS42LDE5LjkyLDExNy4xMSwxMjIsMjA2LjM4LDI0NC43OCwyMDYuMzhDMzkyLjc3LDUwMy40Miw1MDQsMzkyLjE5LDUwNCwyNTUsNTAzLjg4LDI1MC40OCw1MDMuNzYsMjQ1LjkyLDUwMy41MiwyNDEuNDhaIi8+PC9zdmc+|width=32|height=32)
 */
const Firefox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M503.52,241.48c-.12-1.56-.24-3.12-.24-4.68v-.12l-.36-4.68v-.12a245.86,245.86,0,0,0-7.32-41.15c0-.12,0-.12-.12-.24l-1.08-4c-.12-.24-.12-.48-.24-.6-.36-1.2-.72-2.52-1.08-3.72-.12-.24-.12-.6-.24-.84-.36-1.2-.72-2.4-1.08-3.48-.12-.36-.24-.6-.36-1-.36-1.2-.72-2.28-1.2-3.48l-.36-1.08c-.36-1.08-.84-2.28-1.2-3.36a8.27,8.27,0,0,0-.36-1c-.48-1.08-.84-2.28-1.32-3.36-.12-.24-.24-.6-.36-.84-.48-1.2-1-2.28-1.44-3.48,0-.12-.12-.24-.12-.36-1.56-3.84-3.24-7.68-5-11.4l-.36-.72c-.48-1-.84-1.8-1.32-2.64-.24-.48-.48-1.08-.72-1.56-.36-.84-.84-1.56-1.2-2.4-.36-.6-.6-1.2-1-1.8s-.84-1.44-1.2-2.28c-.36-.6-.72-1.32-1.08-1.92s-.84-1.44-1.2-2.16a18.07,18.07,0,0,0-1.2-2c-.36-.72-.84-1.32-1.2-2s-.84-1.32-1.2-2-.84-1.32-1.2-1.92-.84-1.44-1.32-2.16a15.63,15.63,0,0,0-1.2-1.8L463.2,119a15.63,15.63,0,0,0-1.2-1.8c-.48-.72-1.08-1.56-1.56-2.28-.36-.48-.72-1.08-1.08-1.56l-1.8-2.52c-.36-.48-.6-.84-1-1.32-1-1.32-1.8-2.52-2.76-3.72a248.76,248.76,0,0,0-23.51-26.64A186.82,186.82,0,0,0,412,62.46c-4-3.48-8.16-6.72-12.48-9.84a162.49,162.49,0,0,0-24.6-15.12c-2.4-1.32-4.8-2.52-7.2-3.72a254,254,0,0,0-55.43-19.56c-1.92-.36-3.84-.84-5.64-1.2h-.12c-1-.12-1.8-.36-2.76-.48a236.35,236.35,0,0,0-38-4H255.14a234.62,234.62,0,0,0-45.48,5c-33.59,7.08-63.23,21.24-82.91,39-1.08,1-1.92,1.68-2.4,2.16l-.48.48H124l-.12.12.12-.12a.12.12,0,0,0,.12-.12l-.12.12a.42.42,0,0,1,.24-.12c14.64-8.76,34.92-16,49.44-19.56l5.88-1.44c.36-.12.84-.12,1.2-.24,1.68-.36,3.36-.72,5.16-1.08.24,0,.6-.12.84-.12C250.94,20.94,319.34,40.14,367,85.61a171.49,171.49,0,0,1,26.88,32.76c30.36,49.2,27.48,111.11,3.84,147.59-34.44,53-111.35,71.27-159,24.84a84.19,84.19,0,0,1-25.56-59,74.05,74.05,0,0,1,6.24-31c1.68-3.84,13.08-25.67,18.24-24.59-13.08-2.76-37.55,2.64-54.71,28.19-15.36,22.92-14.52,58.2-5,83.28a132.85,132.85,0,0,1-12.12-39.24c-12.24-82.55,43.31-153,94.31-170.51-27.48-24-96.47-22.31-147.71,15.36-29.88,22-51.23,53.16-62.51,90.36,1.68-20.88,9.6-52.08,25.8-83.88-17.16,8.88-39,37-49.8,62.88-15.6,37.43-21,82.19-16.08,124.79.36,3.24.72,6.36,1.08,9.6,19.92,117.11,122,206.38,244.78,206.38C392.77,503.42,504,392.19,504,255,503.88,250.48,503.76,245.92,503.52,241.48Z" />
    </Icon>
);

export default Firefox;