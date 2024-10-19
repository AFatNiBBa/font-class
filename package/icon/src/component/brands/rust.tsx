
import { Icon } from "../../index";

/**
 * A component that renders the `rust` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rust?s=brands rust}
 * @preview ![rust](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuNi4wIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDI0IEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNTA4LjUyLDI0OS43NSw0ODYuNywyMzYuMjRjLS4xNy0yLS4zNC0zLjkzLS41NS01Ljg4bDE4LjcyLTE3LjVhNy4zNSw3LjM1LDAsMCwwLTIuNDQtMTIuMjVsLTI0LTljLS41NC0xLjg4LTEuMDgtMy43OC0xLjY3LTUuNjRsMTUtMjAuODNhNy4zNSw3LjM1LDAsMCwwLTQuNzktMTEuNTRsLTI1LjQyLTQuMTVjLS45LTEuNzMtMS43OS0zLjQ1LTIuNzMtNS4xNWwxMC42OC0yMy40MmE3LjM1LDcuMzUsMCwwLDAtNi45NS0xMC4zOWwtMjUuODIuOTFxLTEuNzktMi4yMi0zLjYxLTQuNEw0MzksODEuODRBNy4zNiw3LjM2LDAsMCwwLDQzMC4xNiw3M0w0MDUsNzguOTNxLTIuMTctMS44My00LjQtMy42MWwuOTEtMjUuODJhNy4zNSw3LjM1LDAsMCwwLTEwLjM5LTdMMzY3LjcsNTMuMjNjLTEuNy0uOTQtMy40My0xLjg0LTUuMTUtMi43M0wzNTguNCwyNS4wOGE3LjM1LDcuMzUsMCwwLDAtMTEuNTQtNC43OUwzMjYsMzUuMjZjLTEuODYtLjU5LTMuNzUtMS4xMy01LjY0LTEuNjdsLTktMjRhNy4zNSw3LjM1LDAsMCwwLTEyLjI1LTIuNDRsLTE3LjUsMTguNzJjLTEuOTUtLjIxLTMuOTEtLjM4LTUuODgtLjU1TDI2Mi4yNSwzLjQ4YTcuMzUsNy4zNSwwLDAsMC0xMi41LDBMMjM2LjI0LDI1LjNjLTIsLjE3LTMuOTMuMzQtNS44OC41NUwyMTIuODYsNy4xM2E3LjM1LDcuMzUsMCwwLDAtMTIuMjUsMi40NGwtOSwyNGMtMS44OS41NS0zLjc5LDEuMDgtNS42NiwxLjY4bC0yMC44Mi0xNWE3LjM1LDcuMzUsMCwwLDAtMTEuNTQsNC43OWwtNC4xNSwyNS40MWMtMS43My45LTMuNDUsMS43OS01LjE2LDIuNzNMMTIwLjg4LDQyLjU1YTcuMzUsNy4zNSwwLDAsMC0xMC4zOSw3bC45MiwyNS44MWMtMS40OSwxLjE5LTMsMi4zOS00LjQyLDMuNjFMODEuODQsNzNBNy4zNiw3LjM2LDAsMCwwLDczLDgxLjg0TDc4LjkzLDEwN2MtMS4yMywxLjQ1LTIuNDMsMi45My0zLjYyLDQuNDFsLTI1LjgxLS45MWE3LjQyLDcuNDIsMCwwLDAtNi4zNywzLjI2LDcuMzUsNy4zNSwwLDAsMC0uNTcsNy4xM2wxMC42NiwyMy40MWMtLjk0LDEuNy0xLjgzLDMuNDMtMi43Myw1LjE2TDI1LjA4LDE1My42YTcuMzUsNy4zNSwwLDAsMC00Ljc5LDExLjU0bDE1LDIwLjgyYy0uNTksMS44Ny0xLjEzLDMuNzctMS42OCw1LjY2bC0yNCw5YTcuMzUsNy4zNSwwLDAsMC0yLjQ0LDEyLjI1bDE4LjcyLDE3LjVjLS4yMSwxLjk1LS4zOCwzLjkxLS41NSw1Ljg4TDMuNDgsMjQ5Ljc1YTcuMzUsNy4zNSwwLDAsMCwwLDEyLjVMMjUuMywyNzUuNzZjLjE3LDIsLjM0LDMuOTIuNTUsNS44N0w3LjEzLDI5OS4xM2E3LjM1LDcuMzUsMCwwLDAsMi40NCwxMi4yNWwyNCw5Yy41NSwxLjg5LDEuMDgsMy43OCwxLjY4LDUuNjVsLTE1LDIwLjgzYTcuMzUsNy4zNSwwLDAsMCw0Ljc5LDExLjU0bDI1LjQyLDQuMTVjLjksMS43MiwxLjc5LDMuNDUsMi43Myw1LjE0TDQyLjU2LDM5MS4xMmE3LjM1LDcuMzUsMCwwLDAsLjU3LDcuMTMsNy4xMyw3LjEzLDAsMCwwLDYuMzcsMy4yNmwyNS44My0uOTFxMS43NywyLjIyLDMuNiw0LjRMNzMsNDMwLjE2QTcuMzYsNy4zNiwwLDAsMCw4MS44NCw0MzlMMTA3LDQzMy4wN3EyLjE4LDEuODMsNC40MSwzLjYxbC0uOTIsMjUuODJhNy4zNSw3LjM1LDAsMCwwLDEwLjM5LDYuOTVsMjMuNDMtMTAuNjhjMS42OS45NCwzLjQyLDEuODMsNS4xNCwyLjczbDQuMTUsMjUuNDJhNy4zNCw3LjM0LDAsMCwwLDExLjU0LDQuNzhsMjAuODMtMTVjMS44Ni42LDMuNzYsMS4xMyw1LjY1LDEuNjhsOSwyNGE3LjM2LDcuMzYsMCwwLDAsMTIuMjUsMi40NGwxNy41LTE4LjcyYzEuOTUuMjEsMy45Mi4zOCw1Ljg4LjU1bDEzLjUxLDIxLjgyYTcuMzUsNy4zNSwwLDAsMCwxMi41LDBsMTMuNTEtMjEuODJjMi0uMTcsMy45My0uMzQsNS44OC0uNTZsMTcuNSwxOC43M2E3LjM2LDcuMzYsMCwwLDAsMTIuMjUtMi40NGw5LTI0YzEuODktLjU1LDMuNzgtMS4wOCw1LjY1LTEuNjhsMjAuODIsMTVhNy4zNCw3LjM0LDAsMCwwLDExLjU0LTQuNzhsNC4xNS0yNS40MmMxLjcyLS45LDMuNDUtMS43OSw1LjE1LTIuNzNsMjMuNDIsMTAuNjhhNy4zNSw3LjM1LDAsMCwwLDEwLjM5LTYuOTVsLS45MS0yNS44MnEyLjIyLTEuNzksNC40LTMuNjFMNDMwLjE2LDQzOWE3LjM2LDcuMzYsMCwwLDAsOC44NC04Ljg0TDQzMy4wNyw0MDVxMS44My0yLjE3LDMuNjEtNC40bDI1LjgyLjkxYTcuMjMsNy4yMywwLDAsMCw2LjM3LTMuMjYsNy4zNSw3LjM1LDAsMCwwLC41OC03LjEzTDQ1OC43NywzNjcuN2MuOTQtMS43LDEuODMtMy40MywyLjczLTUuMTVsMjUuNDItNC4xNWE3LjM1LDcuMzUsMCwwLDAsNC43OS0xMS41NGwtMTUtMjAuODNjLjU5LTEuODcsMS4xMy0zLjc2LDEuNjctNS42NWwyNC05YTcuMzUsNy4zNSwwLDAsMCwyLjQ0LTEyLjI1bC0xOC43Mi0xNy41Yy4yMS0xLjk1LjM4LTMuOTEuNTUtNS44N2wyMS44Mi0xMy41MWE3LjM1LDcuMzUsMCwwLDAsMC0xMi41Wm0tMTUxLDEyOS4wOEExMy45MSwxMy45MSwwLDAsMCwzNDEsMzg5LjUxbC03LjY0LDM1LjY3QTE4Ny41MSwxODcuNTEsMCwwLDEsMTc3LDQyNC40NGwtNy42NC0zNS42NmExMy44NywxMy44NywwLDAsMC0xNi40Ni0xMC42OGwtMzEuNTEsNi43NmExODcuMzgsMTg3LjM4LDAsMCwxLTE2LjI2LTE5LjIxSDI1OC4zYzEuNzIsMCwyLjg5LS4yOSwyLjg5LTEuOTFWMzA5LjU1YzAtMS41Ny0xLjE3LTEuOTEtMi44OS0xLjkxSDIxMy40N2wuMDUtMzQuMzVIMjYyYzQuNDEsMCwyMy42NiwxLjI4LDI5Ljc5LDI1Ljg3LDEuOTEsNy41NSw2LjE3LDMyLjE0LDkuMDYsNDAsMi44OSw4LjgyLDE0LjYsMjYuNDYsMjcuMSwyNi40Nkg0MDdhMTg3LjMsMTg3LjMsMCwwLDEtMTcuMzQsMjAuMDlabTI1Ljc3LDM0LjQ5QTE1LjI0LDE1LjI0LDAsMSwxLDM2OCwzOTguMDhoLjQ0QTE1LjIzLDE1LjIzLDAsMCwxLDM4My4yNCw0MTMuMzJabS0yMjUuNjItLjY4YTE1LjI0LDE1LjI0LDAsMSwxLTE1LjI1LTE1LjI1aC40NUExNS4yNSwxNS4yNSwwLDAsMSwxNTcuNjIsNDEyLjY0Wk02OS41NywyMzQuMTVsMzIuODMtMTQuNmExMy44OCwxMy44OCwwLDAsMCw3LjA2LTE4LjMzTDEwMi42OSwxODZoMjYuNTZWMzA1LjczSDc1LjY1QTE4Ny42NSwxODcuNjUsMCwwLDEsNjkuNTcsMjM0LjE1Wk01OC4zMSwxOTguMDlhMTUuMjQsMTUuMjQsMCwwLDEsMTUuMjMtMTUuMjVINzRhMTUuMjQsMTUuMjQsMCwxLDEtMTUuNjcsMTUuMjRabTE1NS4xNiwyNC40OS4wNS0zNS4zMmg2My4yNmMzLjI4LDAsMjMuMDcsMy43NywyMy4wNywxOC42MiwwLDEyLjI5LTE1LjE5LDE2LjctMjcuNjgsMTYuN1pNMzk5LDMwNi43MWMtOS44LDEuMTMtMjAuNjMtNC4xMi0yMi0xMC4wOS01Ljc4LTMyLjQ5LTE1LjM5LTM5LjQtMzAuNTctNTEuNCwxOC44Ni0xMS45NSwzOC40Ni0yOS42NCwzOC40Ni01My4yNiwwLTI1LjUyLTE3LjQ5LTQxLjU5LTI5LjQtNDkuNDgtMTYuNzYtMTEtMzUuMjgtMTMuMjMtNDAuMjctMTMuMjNIMTE2LjMyQTE4Ny40OSwxODcuNDksMCwwLDEsMjIxLjIxLDcwLjA2bDIzLjQ3LDI0LjZhMTMuODIsMTMuODIsMCwwLDAsMTkuNi40NGwyNi4yNi0yNWExODcuNTEsMTg3LjUxLDAsMCwxLDEyOC4zNyw5MS40M2wtMTgsNDAuNTdBMTQsMTQsMCwwLDAsNDA4LDIyMC40M2wzNC41OSwxNS4zM2ExODcuMTIsMTg3LjEyLDAsMCwxLC40LDMyLjU0SDQyMy43MWMtMS45MSwwLTIuNjksMS4yNy0yLjY5LDMuMTN2OC44MkM0MjEsMzAxLDQwOS4zMSwzMDUuNTgsMzk5LDMwNi43MVpNMjQwLDYwLjIxQTE1LjI0LDE1LjI0LDAsMCwxLDI1NS4yMSw0NWguNDVBMTUuMjQsMTUuMjQsMCwxLDEsMjQwLDYwLjIxWk00MzYuODQsMjE0YTE1LjI0LDE1LjI0LDAsMSwxLDAtMzAuNDhoLjQ0YTE1LjI0LDE1LjI0LDAsMCwxLS40NCwzMC40OFoiLz48L3N2Zz4=|width=32|height=32)
 */
const Rust: typeof Icon = x => (
    <Icon {...x}>
        <path d="M508.52,249.75,486.7,236.24c-.17-2-.34-3.93-.55-5.88l18.72-17.5a7.35,7.35,0,0,0-2.44-12.25l-24-9c-.54-1.88-1.08-3.78-1.67-5.64l15-20.83a7.35,7.35,0,0,0-4.79-11.54l-25.42-4.15c-.9-1.73-1.79-3.45-2.73-5.15l10.68-23.42a7.35,7.35,0,0,0-6.95-10.39l-25.82.91q-1.79-2.22-3.61-4.4L439,81.84A7.36,7.36,0,0,0,430.16,73L405,78.93q-2.17-1.83-4.4-3.61l.91-25.82a7.35,7.35,0,0,0-10.39-7L367.7,53.23c-1.7-.94-3.43-1.84-5.15-2.73L358.4,25.08a7.35,7.35,0,0,0-11.54-4.79L326,35.26c-1.86-.59-3.75-1.13-5.64-1.67l-9-24a7.35,7.35,0,0,0-12.25-2.44l-17.5,18.72c-1.95-.21-3.91-.38-5.88-.55L262.25,3.48a7.35,7.35,0,0,0-12.5,0L236.24,25.3c-2,.17-3.93.34-5.88.55L212.86,7.13a7.35,7.35,0,0,0-12.25,2.44l-9,24c-1.89.55-3.79,1.08-5.66,1.68l-20.82-15a7.35,7.35,0,0,0-11.54,4.79l-4.15,25.41c-1.73.9-3.45,1.79-5.16,2.73L120.88,42.55a7.35,7.35,0,0,0-10.39,7l.92,25.81c-1.49,1.19-3,2.39-4.42,3.61L81.84,73A7.36,7.36,0,0,0,73,81.84L78.93,107c-1.23,1.45-2.43,2.93-3.62,4.41l-25.81-.91a7.42,7.42,0,0,0-6.37,3.26,7.35,7.35,0,0,0-.57,7.13l10.66,23.41c-.94,1.7-1.83,3.43-2.73,5.16L25.08,153.6a7.35,7.35,0,0,0-4.79,11.54l15,20.82c-.59,1.87-1.13,3.77-1.68,5.66l-24,9a7.35,7.35,0,0,0-2.44,12.25l18.72,17.5c-.21,1.95-.38,3.91-.55,5.88L3.48,249.75a7.35,7.35,0,0,0,0,12.5L25.3,275.76c.17,2,.34,3.92.55,5.87L7.13,299.13a7.35,7.35,0,0,0,2.44,12.25l24,9c.55,1.89,1.08,3.78,1.68,5.65l-15,20.83a7.35,7.35,0,0,0,4.79,11.54l25.42,4.15c.9,1.72,1.79,3.45,2.73,5.14L42.56,391.12a7.35,7.35,0,0,0,.57,7.13,7.13,7.13,0,0,0,6.37,3.26l25.83-.91q1.77,2.22,3.6,4.4L73,430.16A7.36,7.36,0,0,0,81.84,439L107,433.07q2.18,1.83,4.41,3.61l-.92,25.82a7.35,7.35,0,0,0,10.39,6.95l23.43-10.68c1.69.94,3.42,1.83,5.14,2.73l4.15,25.42a7.34,7.34,0,0,0,11.54,4.78l20.83-15c1.86.6,3.76,1.13,5.65,1.68l9,24a7.36,7.36,0,0,0,12.25,2.44l17.5-18.72c1.95.21,3.92.38,5.88.55l13.51,21.82a7.35,7.35,0,0,0,12.5,0l13.51-21.82c2-.17,3.93-.34,5.88-.56l17.5,18.73a7.36,7.36,0,0,0,12.25-2.44l9-24c1.89-.55,3.78-1.08,5.65-1.68l20.82,15a7.34,7.34,0,0,0,11.54-4.78l4.15-25.42c1.72-.9,3.45-1.79,5.15-2.73l23.42,10.68a7.35,7.35,0,0,0,10.39-6.95l-.91-25.82q2.22-1.79,4.4-3.61L430.16,439a7.36,7.36,0,0,0,8.84-8.84L433.07,405q1.83-2.17,3.61-4.4l25.82.91a7.23,7.23,0,0,0,6.37-3.26,7.35,7.35,0,0,0,.58-7.13L458.77,367.7c.94-1.7,1.83-3.43,2.73-5.15l25.42-4.15a7.35,7.35,0,0,0,4.79-11.54l-15-20.83c.59-1.87,1.13-3.76,1.67-5.65l24-9a7.35,7.35,0,0,0,2.44-12.25l-18.72-17.5c.21-1.95.38-3.91.55-5.87l21.82-13.51a7.35,7.35,0,0,0,0-12.5Zm-151,129.08A13.91,13.91,0,0,0,341,389.51l-7.64,35.67A187.51,187.51,0,0,1,177,424.44l-7.64-35.66a13.87,13.87,0,0,0-16.46-10.68l-31.51,6.76a187.38,187.38,0,0,1-16.26-19.21H258.3c1.72,0,2.89-.29,2.89-1.91V309.55c0-1.57-1.17-1.91-2.89-1.91H213.47l.05-34.35H262c4.41,0,23.66,1.28,29.79,25.87,1.91,7.55,6.17,32.14,9.06,40,2.89,8.82,14.6,26.46,27.1,26.46H407a187.3,187.3,0,0,1-17.34,20.09Zm25.77,34.49A15.24,15.24,0,1,1,368,398.08h.44A15.23,15.23,0,0,1,383.24,413.32Zm-225.62-.68a15.24,15.24,0,1,1-15.25-15.25h.45A15.25,15.25,0,0,1,157.62,412.64ZM69.57,234.15l32.83-14.6a13.88,13.88,0,0,0,7.06-18.33L102.69,186h26.56V305.73H75.65A187.65,187.65,0,0,1,69.57,234.15ZM58.31,198.09a15.24,15.24,0,0,1,15.23-15.25H74a15.24,15.24,0,1,1-15.67,15.24Zm155.16,24.49.05-35.32h63.26c3.28,0,23.07,3.77,23.07,18.62,0,12.29-15.19,16.7-27.68,16.7ZM399,306.71c-9.8,1.13-20.63-4.12-22-10.09-5.78-32.49-15.39-39.4-30.57-51.4,18.86-11.95,38.46-29.64,38.46-53.26,0-25.52-17.49-41.59-29.4-49.48-16.76-11-35.28-13.23-40.27-13.23H116.32A187.49,187.49,0,0,1,221.21,70.06l23.47,24.6a13.82,13.82,0,0,0,19.6.44l26.26-25a187.51,187.51,0,0,1,128.37,91.43l-18,40.57A14,14,0,0,0,408,220.43l34.59,15.33a187.12,187.12,0,0,1,.4,32.54H423.71c-1.91,0-2.69,1.27-2.69,3.13v8.82C421,301,409.31,305.58,399,306.71ZM240,60.21A15.24,15.24,0,0,1,255.21,45h.45A15.24,15.24,0,1,1,240,60.21ZM436.84,214a15.24,15.24,0,1,1,0-30.48h.44a15.24,15.24,0,0,1-.44,30.48Z" />
    </Icon>
);

export default Rust;