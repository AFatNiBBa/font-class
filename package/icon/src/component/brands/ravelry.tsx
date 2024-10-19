
import { Icon } from "../../index";

/**
 * A component that renders the `ravelry` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ravelry?s=brands ravelry}
 * @preview ![ravelry](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNDk4LjI1MiwyMzQuMjIzYy0xLjIwOC0xMC4zNC0xLjctMjAuODI2LTMuNzQ2LTMxYTMxMC4zMDYsMzEwLjMwNiwwLDAsMC05LjYyMi0zNi42LDE4NC4wNjgsMTg0LjA2OCwwLDAsMC0zMC44NzQtNTcuNSwyNTEuMTU0LDI1MS4xNTQsMCwwLDAtMTguODE4LTIxLjY4OSwyMzcuMzYyLDIzNy4zNjIsMCwwLDAtNDcuMTEzLTM2LjExNkEyNDAuOCwyNDAuOCwwLDAsMCwzMzEuMzU2LDI2LjY1Yy0xMS4wMTgtMy4xLTIyLjI3Mi01LjQzMS0zMy41MTUtNy42MTUtNi43OC0xLjMxNC0xMy43NDktMS42NjctMjAuNjI3LTIuNDgyLS4zMTYtLjAzNi0uNi0uMzU4LS45LS41NTNxLTE2LjE0My4wMDktMzIuMjg4LjAwNmMtMi40MS4zODktNC44MDguOTI1LTcuMjM2LDEuMTVhMTc5LjMzMSwxNzkuMzMxLDAsMCwwLTM0LjI1Niw3LjEsMjIxLjUsMjIxLjUsMCwwLDAtMzkuNzY4LDE2LjM1NSwyODEuMzg1LDI4MS4zODUsMCwwLDAtMzguMDgsMjQuMTU4Yy02LjE2Nyw0LjYxLTEyLjI2OCw5LjM2LTE3Ljk3NCwxNC41MThDOTYuNTM5LDg4LjQ5NCw4Ni4zNCw5Ny43Miw3Ni43ODUsMTA3LjU1NWEyNDMuODc4LDI0My44NzgsMCwwLDAtMzMuNjQ4LDQzLjk1LDIwNi40ODgsMjA2LjQ4OCwwLDAsMC0yMC40OTQsNDQuNiwxOTguMiwxOTguMiwwLDAsMC03LjY5MSwzNC43NTlBMjAxLjEzLDIwMS4xMywwLDAsMCwxMy40LDI2Ni4zODVhMjk5LjcxNiwyOTkuNzE2LDAsMCwwLDQuNDI1LDQwLjI0LDIyNi44NjUsMjI2Ljg2NSwwLDAsMCwxNi43Myw1My4zLDIxMC41NDMsMjEwLjU0MywwLDAsMCwyNCwzOS41MjgsMjEzLjU4OSwyMTMuNTg5LDAsMCwwLDI2LjM1OCwyOC40MTZBMjUxLjMxMywyNTEuMzEzLDAsMCwwLDEyNi43LDQ1OC40NTVhMjg3LjgzMSwyODcuODMxLDAsMCwwLDU1LjksMjUuMjc3LDI2OS41LDI2OS41LDAsMCwwLDQwLjY0MSw5LjgzNWM2LjA3MSwxLjAxLDEyLjI3NSwxLjI1MywxOC40MTIsMS44NzNhNC4xNDksNC4xNDksMCwwLDEsMS4xOS41NmgzMi4yODljMi41MDctLjM4OSw1LS45MzcsNy41MjctMS4xNDMsMTYuMzM2LTEuMzMyLDMyLjEwNy01LjMzNSw0Ny40ODktMTAuNzE3QTIxOS45OTIsMjE5Ljk5MiwwLDAsMCwzNzkuMSw0NjAuMzIyYzkuNzQ5LTYuNDQ3LDE5LjM5NS0xMy4wNzcsMjguNzM3LTIwLjEsNS43ODUtNC4zNDgsMTAuOTg4LTkuNSwxNi4zLTE0LjQ1NywzLjk2NC0zLjcsNy43NjQtNy41NzgsMTEuNTEtMTEuNWEyMzIuMTYyLDIzMi4xNjIsMCwwLDAsMzEuNDI3LTQxLjYzOWM5LjU0Mi0xNi4wNDUsMTcuMzU1LTMyLjkwNSwyMi4zLTUwLjkyNiwyLjg1OS0xMC40MTMsNC45NDctMjEuMDQ1LDcuMDE3LTMxLjY1MiwxLjAzMi01LjI3OSwxLjI1MS0xMC43MjMsMS44Ny0xNi4wODcuMDM2LS4zMTcuMzU4LS42LjU1Mi0uOVYyMzYuMDA1QTkuNzU3LDkuNzU3LDAsMCwxLDQ5OC4yNTIsMjM0LjIyM1ptLTE2MS4xMTctMS4xNXMtMTYuNTcyLTIuOTgtMjguNDctMi45OGMtMjcuMiwwLTMzLjU3LDE0LjktMzMuNTcsMzcuMDRWMzYwLjhIMjAxLjU4MlYxNzAuMDYySDI3NS4xdjMxLjkzMWM4LjkyNC0yNi44MjIsMjYuNzcxLTM2LjE4OSw2Mi4wNC0zNi4xODlaIi8+PC9zdmc+|width=32|height=32)
 */
const Ravelry: typeof Icon = x => (
    <Icon {...x}>
        <path d="M498.252,234.223c-1.208-10.34-1.7-20.826-3.746-31a310.306,310.306,0,0,0-9.622-36.6,184.068,184.068,0,0,0-30.874-57.5,251.154,251.154,0,0,0-18.818-21.689,237.362,237.362,0,0,0-47.113-36.116A240.8,240.8,0,0,0,331.356,26.65c-11.018-3.1-22.272-5.431-33.515-7.615-6.78-1.314-13.749-1.667-20.627-2.482-.316-.036-.6-.358-.9-.553q-16.143.009-32.288.006c-2.41.389-4.808.925-7.236,1.15a179.331,179.331,0,0,0-34.256,7.1,221.5,221.5,0,0,0-39.768,16.355,281.385,281.385,0,0,0-38.08,24.158c-6.167,4.61-12.268,9.36-17.974,14.518C96.539,88.494,86.34,97.72,76.785,107.555a243.878,243.878,0,0,0-33.648,43.95,206.488,206.488,0,0,0-20.494,44.6,198.2,198.2,0,0,0-7.691,34.759A201.13,201.13,0,0,0,13.4,266.385a299.716,299.716,0,0,0,4.425,40.24,226.865,226.865,0,0,0,16.73,53.3,210.543,210.543,0,0,0,24,39.528,213.589,213.589,0,0,0,26.358,28.416A251.313,251.313,0,0,0,126.7,458.455a287.831,287.831,0,0,0,55.9,25.277,269.5,269.5,0,0,0,40.641,9.835c6.071,1.01,12.275,1.253,18.412,1.873a4.149,4.149,0,0,1,1.19.56h32.289c2.507-.389,5-.937,7.527-1.143,16.336-1.332,32.107-5.335,47.489-10.717A219.992,219.992,0,0,0,379.1,460.322c9.749-6.447,19.395-13.077,28.737-20.1,5.785-4.348,10.988-9.5,16.3-14.457,3.964-3.7,7.764-7.578,11.51-11.5a232.162,232.162,0,0,0,31.427-41.639c9.542-16.045,17.355-32.905,22.3-50.926,2.859-10.413,4.947-21.045,7.017-31.652,1.032-5.279,1.251-10.723,1.87-16.087.036-.317.358-.6.552-.9V236.005A9.757,9.757,0,0,1,498.252,234.223Zm-161.117-1.15s-16.572-2.98-28.47-2.98c-27.2,0-33.57,14.9-33.57,37.04V360.8H201.582V170.062H275.1v31.931c8.924-26.822,26.771-36.189,62.04-36.189Z" />
    </Icon>
);

export default Ravelry;