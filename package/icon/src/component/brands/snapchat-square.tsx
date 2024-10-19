
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `snapchat-square` icon from the `brands` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/snapchat-square?s=brands snapchat-square}
 * @preview ![snapchat-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zODQsMzJINjRBNjQsNjQsMCwwLDAsMCw5NlY0MTZhNjQsNjQsMCwwLDAsNjQsNjRIMzg0YTY0LDY0LDAsMCwwLDY0LTY0Vjk2QTY0LDY0LDAsMCwwLDM4NCwzMlptLTMuOTA3LDMxOS4zMDktLjA4My4xYTMyLjM2NCwzMi4zNjQsMCwwLDEtOC43MTcsNi44MjMsOTAuMjYsOTAuMjYsMCwwLDEtMjAuNTg2LDguMiwxMi42OTQsMTIuNjk0LDAsMCwwLTMuODUyLDEuNzZjLTIuMTU4LDEuOTA5LTIuMSw0LjY0LTQuNCw4LjU1YTIzLjEzNywyMy4xMzcsMCwwLDEtNi44NCw3LjQ3MWMtNi43MDcsNC42MzItMTQuMjQ0LDQuOTIzLTIyLjIzLDUuMjMtNy4yMTQuMjc0LTE1LjM5LjU4MS0yNC43MjksMy42NjktMy43NjEsMS4yNDUtNy43NTMsMy42OTQtMTIuMzc3LDYuNTMzLTExLjI2NSw2LjktMjYuNjgsMTYuMzUzLTUyLjMsMTYuMzUzcy00MC45MjUtOS40LTUyLjEwNi0xNi4yNzljLTQuNjU3LTIuODg4LTguNjc1LTUuMzYyLTEyLjU0My02LjY0LTkuMzM5LTMuMDgtMTcuNTE2LTMuNC0yNC43MjktMy42Ny03Ljk4Ni0uMzA3LTE1LjUyMy0uNi0yMi4yMzEtNS4yMjlhMjMuMDg1LDIzLjA4NSwwLDAsMS02LjAxLTYuMTFjLTMuMi00LjYzMi0yLjg1NS03LjgtNS4yNTQtOS44OTVhMTMuNDI4LDEzLjQyOCwwLDAsMC00LjEtMS44MzQsODkuOTg2LDg5Ljk4NiwwLDAsMS0yMC4zMTMtOC4xMjcsMzIuOTA1LDMyLjkwNSwwLDAsMS04LjMtNi4yODRjLTYuNTgzLTYuNzU3LTguMjc2LTE0Ljc3Ni01LjY4Ni0yMS44MjQsMy40MzYtOS4zMzgsMTEuNTcxLTEyLjExMSwxOS40LTE2LjI2MiwxNC43NzYtOC4wMjcsMjYuMzQ4LTE4LjA1NSwzNC40MzMtMjkuODg0YTY4LjIzNiw2OC4yMzYsMCwwLDAsNS45ODUtMTAuNTY3Yy43ODktMi4xNTguNzcyLTMuMzI5LjI0MS00LjQxNmE3LjM4Niw3LjM4NiwwLDAsMC0yLjIwOC0yLjIxN2MtMi41MzItMS42NzYtNS4xMTMtMy4zNTMtNi44ODItNC41LTMuMjctMi4xNDEtNS44NjgtMy44MTgtNy41MjktNC45OC02LjI2Ny00LjM4My0xMC42NS05LjA0LTEzLjQtMTQuMjQ1YTI4LjQsMjguNCwwLDAsMS0xLjM2OS0yMy41ODRjNC4xMzQtMTAuOTI0LDE0LjQ2OS0xNy43MDYsMjYuOTc4LTE3LjcwNmEzNy4xNDEsMzcuMTQxLDAsMCwxLDcuODQ1LjgzYy42ODkuMTUsMS4zNy4zMDcsMi4wNDIuNDgyLS4xMDgtNy40My4wNTgtMTUuMzU3LjcyMi0yMy4xMTksMi4zNTgtMjcuMjYxLDExLjkxMi00MS41ODksMjEuODc0LTUyLjk5NGE4Ni44MzYsODYuODM2LDAsMCwxLDIyLjI4LTE3LjkzMUMxODguMjU0LDEwMC4zODMsMjA1LjMxMiw5NiwyMjQsOTZzMzUuODI4LDQuMzgzLDUwLjk0NCwxMy4wMTZhODcuMTY5LDg3LjE2OSwwLDAsMSwyMi4yMzksMTcuOWM5Ljk2MSwxMS40MDYsMTkuNTE2LDI1LjcwOSwyMS44NzQsNTIuOTk1YTIzMS4xOTQsMjMxLjE5NCwwLDAsMSwuNzEzLDIzLjExOGMuNjczLS4xNzQsMS4zNjItLjMzMiwyLjA1MS0uNDgxYTM3LjEzMSwzNy4xMzEsMCwwLDEsNy44NDQtLjgzYzEyLjUsMCwyMi44Miw2Ljc4MiwyNi45NzEsMTcuNzA2YTI4LjM3LDI4LjM3LDAsMCwxLTEuNCwyMy41NTljLTIuNzQsNS4yLTcuMTIzLDkuODYxLTEzLjM5LDE0LjI0NC0xLjY2OCwxLjE4Ny00LjI1OCwyLjg2NC03LjUyOSw0Ljk4MS0xLjgzNSwxLjE4Ny00LjU0MSwyLjk0Ny03LjE2NCw0LjY4MmE2Ljg1Niw2Ljg1NiwwLDAsMC0xLjk1MSwyLjAzNGMtLjUwNiwxLjA0Ni0uNTM5LDIuMTkxLjE2Niw0LjIwOGE2OS4wMTUsNjkuMDE1LDAsMCwwLDYuMDg1LDEwLjc5MmM4LjI2OCwxMi4xLDIwLjE4OCwyMi4zMTMsMzUuNDU0LDMwLjQwNywxLjQ4Ni43NzIsMi45OCwxLjUsNC40NDEsMi4yNTguNzIyLjMzMiwxLjU2OS43NjMsMi40OTEsMS4zLDQuOSwyLjcyMyw5LjIsNi4wMSwxMS40NTUsMTIuMTUzQzM4Ny44MjEsMzM2LjkxNSwzODYuMjY5LDM0NC43LDM4MC4wOTMsMzUxLjMwOVptLTE2LjcxOS0xOC40NjFjLTUwLjMxMy0yNC4zMTQtNTguMzMyLTYxLjkxOC01OC42ODktNjQuNzQ5LS40MzEtMy4zNzktLjkyMS02LjAzNSwyLjgwNi05LjQ3MiwzLjU5NC0zLjMyOCwxOS41NDEtMTMuMTksMjMuOTY1LTE2LjI3OCw3LjMzLTUuMTE0LDEwLjUzNC0xMC4yMTksOC4xNi0xNi40OTUtMS42Ni00LjMxNi01LjY4Ni01Ljk3Ni05Ljk2MS01Ljk3NmExOC41LDE4LjUsMCwwLDAtMy45OTMuNDQ4Yy04LjAzNSwxLjc0My0xNS44MzgsNS43NjktMjAuMzU0LDYuODU3YTcuMSw3LjEsMCwwLDEtMS42Ni4yMjRjLTIuNDA4LDAtMy4yNzktMS4wNzEtMy4wODgtMy45NjguNTY0LTguNzgzLDEuNzU5LTI1LjkyNS4zNzMtNDEuOTM3LTEuODg0LTIyLjAzMi04Ljk5LTMyLjk0OC0xNy40MzItNDIuNi00LjA1MS00LjYyNC0yMy4xMzUtMjQuNjU0LTU5LjUzNi0yNC42NTRTMTY4LjUzLDEzNC4zNTksMTY0LjQ3OSwxMzljLTguNDM0LDkuNjU0LTE1LjUzMSwyMC41Ny0xNy40MzIsNDIuNi0xLjM4NiwxNi4wMTMtLjE0MSwzMy4xNDcuMzczLDQxLjkzNy4xNjYsMi43NTYtLjY4LDMuOTY4LTMuMDg4LDMuOTY4YTcuMSw3LjEsMCwwLDEtMS42Ni0uMjI0Yy00LjUwNy0xLjA4Ny0xMi4zMS01LjExMy0yMC4zNDYtNi44NTZhMTguNDk0LDE4LjQ5NCwwLDAsMC0zLjk5My0uNDQ5Yy00LjI1LDAtOC4zLDEuNjM2LTkuOTYxLDUuOTc3LTIuMzc0LDYuMjc2Ljg0NywxMS4zODEsOC4xNjgsMTYuNDk0LDQuNDI1LDMuMDg4LDIwLjM3MSwxMi45NTgsMjMuOTY2LDE2LjI3OSwzLjcxOSwzLjQzNywzLjIzNyw2LjA5MywyLjgwNSw5LjQ3MS0uMzU2LDIuNzktOC4zODQsNDAuMzk0LTU4LjY4OSw2NC43NDktMi45NDYsMS40MjgtNy45Niw0LjQ1Ljg4LDkuMzMxLDEzLjg4LDcuNjI4LDIzLjExMSw2LjgwNywzMC4zLDExLjQzLDYuMDkzLDMuOTI3LDIuNSwxMi4zOTQsNi45MjMsMTUuNDQ5LDUuNDU0LDMuNzYsMjEuNTgzLS4yNjYsNDIuMzM1LDYuNiwxNy40MzMsNS43NDQsMjguMTE2LDIyLjAxNSw1OC45NjMsMjIuMDE1czQxLjc4OC0xNi4zLDU4LjkzOC0yMS45NzNjMjAuNzk1LTYuODY1LDM2Ljg5LTIuODM5LDQyLjMzNi02LjYsNC40MzMtMy4wNTUuODIyLTExLjUyMiw2LjkyMy0xNS40NDgsNy4xODEtNC42MjQsMTYuNDExLTMuOCwzMC4zLTExLjQ3MkMzNzEuMzYsMzM3LjM1NSwzNjYuMzQ2LDMzNC4zMzMsMzYzLjM3NCwzMzIuODQ4WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function SnapchatSquare(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M384,32H64A64,64,0,0,0,0,96V416a64,64,0,0,0,64,64H384a64,64,0,0,0,64-64V96A64,64,0,0,0,384,32Zm-3.907,319.309-.083.1a32.364,32.364,0,0,1-8.717,6.823,90.26,90.26,0,0,1-20.586,8.2,12.694,12.694,0,0,0-3.852,1.76c-2.158,1.909-2.1,4.64-4.4,8.55a23.137,23.137,0,0,1-6.84,7.471c-6.707,4.632-14.244,4.923-22.23,5.23-7.214.274-15.39.581-24.729,3.669-3.761,1.245-7.753,3.694-12.377,6.533-11.265,6.9-26.68,16.353-52.3,16.353s-40.925-9.4-52.106-16.279c-4.657-2.888-8.675-5.362-12.543-6.64-9.339-3.08-17.516-3.4-24.729-3.67-7.986-.307-15.523-.6-22.231-5.229a23.085,23.085,0,0,1-6.01-6.11c-3.2-4.632-2.855-7.8-5.254-9.895a13.428,13.428,0,0,0-4.1-1.834,89.986,89.986,0,0,1-20.313-8.127,32.905,32.905,0,0,1-8.3-6.284c-6.583-6.757-8.276-14.776-5.686-21.824,3.436-9.338,11.571-12.111,19.4-16.262,14.776-8.027,26.348-18.055,34.433-29.884a68.236,68.236,0,0,0,5.985-10.567c.789-2.158.772-3.329.241-4.416a7.386,7.386,0,0,0-2.208-2.217c-2.532-1.676-5.113-3.353-6.882-4.5-3.27-2.141-5.868-3.818-7.529-4.98-6.267-4.383-10.65-9.04-13.4-14.245a28.4,28.4,0,0,1-1.369-23.584c4.134-10.924,14.469-17.706,26.978-17.706a37.141,37.141,0,0,1,7.845.83c.689.15,1.37.307,2.042.482-.108-7.43.058-15.357.722-23.119,2.358-27.261,11.912-41.589,21.874-52.994a86.836,86.836,0,0,1,22.28-17.931C188.254,100.383,205.312,96,224,96s35.828,4.383,50.944,13.016a87.169,87.169,0,0,1,22.239,17.9c9.961,11.406,19.516,25.709,21.874,52.995a231.194,231.194,0,0,1,.713,23.118c.673-.174,1.362-.332,2.051-.481a37.131,37.131,0,0,1,7.844-.83c12.5,0,22.82,6.782,26.971,17.706a28.37,28.37,0,0,1-1.4,23.559c-2.74,5.2-7.123,9.861-13.39,14.244-1.668,1.187-4.258,2.864-7.529,4.981-1.835,1.187-4.541,2.947-7.164,4.682a6.856,6.856,0,0,0-1.951,2.034c-.506,1.046-.539,2.191.166,4.208a69.015,69.015,0,0,0,6.085,10.792c8.268,12.1,20.188,22.313,35.454,30.407,1.486.772,2.98,1.5,4.441,2.258.722.332,1.569.763,2.491,1.3,4.9,2.723,9.2,6.01,11.455,12.153C387.821,336.915,386.269,344.7,380.093,351.309Zm-16.719-18.461c-50.313-24.314-58.332-61.918-58.689-64.749-.431-3.379-.921-6.035,2.806-9.472,3.594-3.328,19.541-13.19,23.965-16.278,7.33-5.114,10.534-10.219,8.16-16.495-1.66-4.316-5.686-5.976-9.961-5.976a18.5,18.5,0,0,0-3.993.448c-8.035,1.743-15.838,5.769-20.354,6.857a7.1,7.1,0,0,1-1.66.224c-2.408,0-3.279-1.071-3.088-3.968.564-8.783,1.759-25.925.373-41.937-1.884-22.032-8.99-32.948-17.432-42.6-4.051-4.624-23.135-24.654-59.536-24.654S168.53,134.359,164.479,139c-8.434,9.654-15.531,20.57-17.432,42.6-1.386,16.013-.141,33.147.373,41.937.166,2.756-.68,3.968-3.088,3.968a7.1,7.1,0,0,1-1.66-.224c-4.507-1.087-12.31-5.113-20.346-6.856a18.494,18.494,0,0,0-3.993-.449c-4.25,0-8.3,1.636-9.961,5.977-2.374,6.276.847,11.381,8.168,16.494,4.425,3.088,20.371,12.958,23.966,16.279,3.719,3.437,3.237,6.093,2.805,9.471-.356,2.79-8.384,40.394-58.689,64.749-2.946,1.428-7.96,4.45.88,9.331,13.88,7.628,23.111,6.807,30.3,11.43,6.093,3.927,2.5,12.394,6.923,15.449,5.454,3.76,21.583-.266,42.335,6.6,17.433,5.744,28.116,22.015,58.963,22.015s41.788-16.3,58.938-21.973c20.795-6.865,36.89-2.839,42.336-6.6,4.433-3.055.822-11.522,6.923-15.448,7.181-4.624,16.411-3.8,30.3-11.472C371.36,337.355,366.346,334.333,363.374,332.848Z" />
        </Icon>
    </>
}