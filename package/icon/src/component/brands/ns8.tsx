
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `ns8` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/ns8?s=brands ns8}
 * @preview ![ns8](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xMDQuMzI0LDI2OS4xNzJoMjYuMDY3VjI0Mi45OTRIMTA0LjMyNFptNTIuNDY2LTI2LjE3OC0uMDU1LTI2LjE3OHYtLjk0MWEzOS4zMjUsMzkuMzI1LDAsMCwwLTc4LjY0NC45NDF2LjE2NmgyNi40di0uMTY2YTEyLjk4LDEyLjk4LDAsMCwxLDI1Ljk1NiwwdjI2LjE3OFptNTIuMzU2LDI1Ljg0NmE5MS4xLDkxLjEsMCwwLDEtOTEuMSw5MS4xaC0uNjA5YTkxLjEsOTEuMSwwLDAsMS05MS4xLTkxLjFIMHYuMTY2QTExNy4zMywxMTcuMzMsMCwwLDAsMTE3LjQ0LDM4Ni4yOGguNzc1QTExNy4zMzEsMTE3LjMzMSwwLDAsMCwyMzUuNDksMjY4Ljg0VjI0Mi44MjhIMjA5LjE0NlptLTE1Ny4yMzMsMGE2NS4zNjIsNjUuMzYyLDAsMCwwLDEzMC43MjMsMEgxNTYuMjkyYTM5LjAyMywzOS4wMjMsMCwwLDEtNzguMDM1LDBWMjQyLjg4M0g1MS45Njh2LTI2LjYyQTY1LjQyLDY1LjQyLDAsMCwxLDE4Mi44LDIxNy40OHYyNS4yOTNoMjYuMzQ0VjIxNy40OGE5MS43NjEsOTEuNzYxLDAsMCwwLTE4My41MjIsMHYyNS40SDUxLjkxM1ptNDE4LjQtNzEuMTczYzEzLjY3LDAsMjQuNTczLDYuNjQyLDMwLjA1MiwxOC4yNjRsLjcxOSwxLjU0OSwyMy4yNDUtMTEuNTExLS42MDktMS40MzljLTguMDI1LTE5LjI2LTI4LjUtMzEuMjctNTMuNDA3LTMxLjI3LTIzLjEzNCwwLTQzLjYxMSwxMS40LTUwLjk3MiwyOC40NDctLjEyMywyNi44NzYtLjE1OCwyMy45LDAsMjQuODUsNC43LDExLjAxMywxNC41NTUsMTkuMzcsMjguNjY4LDI0LjI0MWExMDIuMDMzLDEwMi4wMzMsMCwwLDAsMTkuODEzLDMuOTg0YzUuNDc5LjcyLDEwLjYyNiwxLjM4NCwxNS44MjksMy4xLDYuMzY0LDIuMSwxMC40Niw1LjI1NywxMi44NCw5Ljg1MXY5Ljg1MWMtMy43MDgsNy41MjctMTMuNzgxLDEyLjM0Mi0yNS43OTEsMTIuMzQyLTE0LjMzNCwwLTI1Ljk1Ni02LjkxOC0zMS45MzMtMTkuMDM5bC0uNzItMS40OTRMNDE1LjAyNiwyODAuOWwuNTUzLDEuNDM5YzcuOTE1LDE5LjQyNiwyOS42MDksMzIuMDQ0LDU1LjI4OSwzMi4wNDQsMjMuNjMyLDAsNDQuNjA4LTExLjQsNTIuMy0yOC40NDdsLjE2Ni0yNS45LS4xNjYtLjY2NGMtNC44Ny0xMS4wMTQtMTUuMjE5LTE5LjY0Ny0yOC45NDQtMjQuMjQxLTcuNjkzLTIuNzEyLTE0LjMzNS0zLjYtMjAuNy00LjQyN2E4My43NzcsODMuNzc3LDAsMCwxLTE0LjgzMi0yLjg3OGMtNi4zMS0xLjkzNy0xMC40LTUuMDkyLTEyLjYxOS05LjYzdi04LjQxMkM0NDkuNDUsMjAyLjQyNyw0NTguOTY5LDE5Ny42NjcsNDcwLjMxNSwxOTcuNjY3Wk0yODcuNTY4LDMxMS4zNDRoMjYuMDY3di02OC40SDI4Ny41NjhabTM1Mi4yNjYtNTMuM2MtMi45MzMtNi4yNTQtOC4zLTEyLjAxLTE1LjQ0MS0xNi43MTRBMzcuOTksMzcuOTksMCwwLDAsNjM3LjQsMjI2bC4xNjYtMjUuMzQ3LS4xNjYtLjY2NEM2MzAuMDM4LDE4NCw2MTAuNjY3LDE3My4yNiw1ODkuMjUsMTczLjI2UzU0OC40NjEsMTg0LDU0MS4xLDE5OS45OTJsLS4xNjYsMjUuMzQ3LjE2Ni42NjRhMzkuNjQzLDM5LjY0MywwLDAsMCwxMy4wMDYsMTUuMzMxYy03LjIsNC43LTEyLjUwOCwxMC40Ni0xNS40NDEsMTYuNzE0bC0uMTY2LDI4Ljg4OS4xNjYuNzJjNy41ODIsMTUuOTk0LDI3Ljg5MywyNi43MzEsNTAuNTg1LDI2LjczMXM0My4wNTctMTAuNzM3LDUwLjU4NC0yNi43MzFsLjE2Ni0yOC44OVptLTczLjIyLTUwLjgwNmMzLjYtNi4zMSwxMi41NjMtMTAuNTE2LDIyLjU4LTEwLjUxNnMxOS4wMzgsNC4yMDYsMjIuNjM2LDEwLjUxNnYxMy43MjVjLTMuNTQyLDYuMi0xMi41NjMsMTAuMzQ5LTIyLjYzNiwxMC4zNDlzLTE5LjA5NC00LjE1LTIyLjU4LTEwLjM0OVptNDcuMzE5LDcyLjE2OWMtMy43NjQsNi42NDEtMTMuMzM4LDEwLjktMjQuNjgzLDEwLjktMTEuMTI1LDAtMjAuOTc2LTQuMzcyLTI0LjY4NC0xMC45VjI2My4yNWMzLjcwOC02LjMwOSwxMy41LTEwLjUxNSwyNC42ODQtMTAuNTE1LDExLjM0NSwwLDIwLjkxOSw0LjE1LDI0LjY4MywxMC41MTVaTTM3Ni40LDI2NS45NjJsLTU5LjgyNy04OS43MTNoLTI5djQwLjYyM2gyNi41MXYuMzg3bDYyLjUzOSw5NC4wODVINDAyLjNWMTc2LjI0OUgzNzYuNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Ns8(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M104.324,269.172h26.067V242.994H104.324Zm52.466-26.178-.055-26.178v-.941a39.325,39.325,0,0,0-78.644.941v.166h26.4v-.166a12.98,12.98,0,0,1,25.956,0v26.178Zm52.356,25.846a91.1,91.1,0,0,1-91.1,91.1h-.609a91.1,91.1,0,0,1-91.1-91.1H0v.166A117.33,117.33,0,0,0,117.44,386.28h.775A117.331,117.331,0,0,0,235.49,268.84V242.828H209.146Zm-157.233,0a65.362,65.362,0,0,0,130.723,0H156.292a39.023,39.023,0,0,1-78.035,0V242.883H51.968v-26.62A65.42,65.42,0,0,1,182.8,217.48v25.293h26.344V217.48a91.761,91.761,0,0,0-183.522,0v25.4H51.913Zm418.4-71.173c13.67,0,24.573,6.642,30.052,18.264l.719,1.549,23.245-11.511-.609-1.439c-8.025-19.26-28.5-31.27-53.407-31.27-23.134,0-43.611,11.4-50.972,28.447-.123,26.876-.158,23.9,0,24.85,4.7,11.013,14.555,19.37,28.668,24.241a102.033,102.033,0,0,0,19.813,3.984c5.479.72,10.626,1.384,15.829,3.1,6.364,2.1,10.46,5.257,12.84,9.851v9.851c-3.708,7.527-13.781,12.342-25.791,12.342-14.334,0-25.956-6.918-31.933-19.039l-.72-1.494L415.026,280.9l.553,1.439c7.915,19.426,29.609,32.044,55.289,32.044,23.632,0,44.608-11.4,52.3-28.447l.166-25.9-.166-.664c-4.87-11.014-15.219-19.647-28.944-24.241-7.693-2.712-14.335-3.6-20.7-4.427a83.777,83.777,0,0,1-14.832-2.878c-6.31-1.937-10.4-5.092-12.619-9.63v-8.412C449.45,202.427,458.969,197.667,470.315,197.667ZM287.568,311.344h26.067v-68.4H287.568Zm352.266-53.3c-2.933-6.254-8.3-12.01-15.441-16.714A37.99,37.99,0,0,0,637.4,226l.166-25.347-.166-.664C630.038,184,610.667,173.26,589.25,173.26S548.461,184,541.1,199.992l-.166,25.347.166.664a39.643,39.643,0,0,0,13.006,15.331c-7.2,4.7-12.508,10.46-15.441,16.714l-.166,28.889.166.72c7.582,15.994,27.893,26.731,50.585,26.731s43.057-10.737,50.584-26.731l.166-28.89Zm-73.22-50.806c3.6-6.31,12.563-10.516,22.58-10.516s19.038,4.206,22.636,10.516v13.725c-3.542,6.2-12.563,10.349-22.636,10.349s-19.094-4.15-22.58-10.349Zm47.319,72.169c-3.764,6.641-13.338,10.9-24.683,10.9-11.125,0-20.976-4.372-24.684-10.9V263.25c3.708-6.309,13.5-10.515,24.684-10.515,11.345,0,20.919,4.15,24.683,10.515ZM376.4,265.962l-59.827-89.713h-29v40.623h26.51v.387l62.539,94.085H402.3V176.249H376.4Z" />
        </Icon>
    </>
}