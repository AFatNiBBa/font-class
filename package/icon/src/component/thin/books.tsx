
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `books` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=thin books}
 * @preview ![books](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MTAuNjE1IDQ0NS4zMTZMMzk3Ljc2OCAyOS41NTFDMzkyLjkzNiAxMS43NDIgMzc2LjYyMyAwIDM1OC43OTcgMEMzNTUuMzQgMCAzNTEuODIyIDAuNDQxIDM0OC4zMjQgMS4zNjdMMjg1LjkzMiAxNy44NzFDMjc5LjQxOCAxOS41OTQgMjc0LjA4NCAyMy4xMTcgMjY5LjQ0MyAyNy4zMzJDMjY0LjA5MiAxMS41NDMgMjQ5LjU5OCAwIDIzMiAwSDE2OEMxNTQuNTYxIDAgMTQzLjI1NCA3LjA2MiAxMzYgMTcuMjI3QzEyOC43NDYgNy4wNjIgMTE3LjQzOSAwIDEwNCAwSDQwQzE3LjkwOCAwIDAgMTcuOTEgMCA0MFY0NzJDMCA0OTQuMDkgMTcuOTA4IDUxMiA0MCA1MTJIMTA0QzExNy40MzkgNTEyIDEyOC43NDYgNTA0LjkzOCAxMzYgNDk0Ljc3M0MxNDMuMjU0IDUwNC45MzggMTU0LjU2MSA1MTIgMTY4IDUxMkgyMzJDMjU0LjA5MiA1MTIgMjcyIDQ5NC4wOSAyNzIgNDcyVjEyMC41MjNMMzcwLjIzMiA0ODIuNDQ5QzM3NS4wNjYgNTAwLjI1OCAzOTEuMzc3IDUxMiA0MDkuMjA1IDUxMkM0MTIuNjYyIDUxMiA0MTYuMTc4IDUxMS41NTkgNDE5LjY3NiA1MTAuNjMzTDQ4Mi4wNjggNDk0LjEyOUM1MDMuNjA1IDQ4OC40MyA1MTYuMzg1IDQ2Ni41NzggNTEwLjYxNSA0NDUuMzE2Wk0zNjYuODg5IDQwOS4wNDdMMjkxLjY2NCAxMzEuODk4TDQwMS4xMTEgMTAyLjk1M0w0NzYuMzM2IDM4MC4xMDJMMzY2Ljg4OSA0MDkuMDQ3Wk0xNjggMTZIMjMyQzI0NS4yMzQgMTYgMjU2IDI2Ljc2NiAyNTYgNDBWOTZIMTQ0VjQwQzE0NCAyNi43NjYgMTU0Ljc2OCAxNiAxNjggMTZaTTI1NiA0MDBIMTQ0VjExMkgyNTZWNDAwWk0xNiAxMTJIMTI4VjQwMEgxNlYxMTJaTTE2IDQwQzE2IDI2Ljc2NiAyNi43NjggMTYgNDAgMTZIMTA0QzExNy4yMzQgMTYgMTI4IDI2Ljc2NiAxMjggNDBWOTZIMTZWNDBaTTEwNCA0OTZINDBDMjYuNzY4IDQ5NiAxNiA0ODUuMjM0IDE2IDQ3MlY0MTZIMTI4VjQ3MkMxMjggNDg1LjIzNCAxMTcuMjM0IDQ5NiAxMDQgNDk2Wk0yNTYgNDcyQzI1NiA0ODUuMjM0IDI0NS4yMzQgNDk2IDIzMiA0OTZIMTY4QzE1NC43NjggNDk2IDE0NCA0ODUuMjM0IDE0NCA0NzJWNDE2SDI1NlY0NzJaTTI3NS4xNjIgNDQuNjM3QzI3OC4zOTggMzkuMDMxIDI4My42NzYgMzUuMDIgMjkwLjAyMyAzMy4zNEwzNTIuNDE0IDE2LjgzNkMzNTQuNTEgMTYuMjgxIDM1Ni42NTYgMTYgMzU4Ljc5OSAxNkMzNjkuODE2IDE2IDM3OS40OTIgMjMuMjk3IDM4Mi4zMjYgMzMuNzQyTDM5Ni45MjggODcuNTM5TDM5Ni43OTkgODcuNTc0Vjg3LjU3TDMzOS42MDUgMTAyLjY5OUwyODcuNDggMTE2LjQ4NEwyNzIuODI2IDYyLjQ5MkMyNzEuMTg0IDU2LjQzNCAyNzIuMDEyIDUwLjA5NCAyNzUuMTYyIDQ0LjYzN1pNNDkyLjgzOCA0NjcuMzYzQzQ4OS42MDIgNDcyLjk2OSA0ODQuMzI0IDQ3Ni45OCA0NzcuOTc3IDQ3OC42Nkw0MTUuNTg2IDQ5NS4xNjRDNDEzLjQ5IDQ5NS43MTkgNDExLjM0MiA0OTYgNDA5LjIwNSA0OTZDMzk4LjE4NiA0OTYgMzg4LjUwOCA0ODguNzAzIDM4NS42NzQgNDc4LjI1OEwzNzEuMDcyIDQyNC40NjFMMzcxLjIwMSA0MjQuNDI2VjQyNC40M0wzOTYuOTM4IDQxNy42MTdMNDgwLjUyIDM5NS41MTZMNDk1LjE3NCA0NDkuNTA4QzQ5Ni44MTggNDU1LjU2NiA0OTUuOTg4IDQ2MS45MDYgNDkyLjgzOCA0NjcuMzYzWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Books(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M510.615 445.316L397.768 29.551C392.936 11.742 376.623 0 358.797 0C355.34 0 351.822 0.441 348.324 1.367L285.932 17.871C279.418 19.594 274.084 23.117 269.443 27.332C264.092 11.543 249.598 0 232 0H168C154.561 0 143.254 7.062 136 17.227C128.746 7.062 117.439 0 104 0H40C17.908 0 0 17.91 0 40V472C0 494.09 17.908 512 40 512H104C117.439 512 128.746 504.938 136 494.773C143.254 504.938 154.561 512 168 512H232C254.092 512 272 494.09 272 472V120.523L370.232 482.449C375.066 500.258 391.377 512 409.205 512C412.662 512 416.178 511.559 419.676 510.633L482.068 494.129C503.605 488.43 516.385 466.578 510.615 445.316ZM366.889 409.047L291.664 131.898L401.111 102.953L476.336 380.102L366.889 409.047ZM168 16H232C245.234 16 256 26.766 256 40V96H144V40C144 26.766 154.768 16 168 16ZM256 400H144V112H256V400ZM16 112H128V400H16V112ZM16 40C16 26.766 26.768 16 40 16H104C117.234 16 128 26.766 128 40V96H16V40ZM104 496H40C26.768 496 16 485.234 16 472V416H128V472C128 485.234 117.234 496 104 496ZM256 472C256 485.234 245.234 496 232 496H168C154.768 496 144 485.234 144 472V416H256V472ZM275.162 44.637C278.398 39.031 283.676 35.02 290.023 33.34L352.414 16.836C354.51 16.281 356.656 16 358.799 16C369.816 16 379.492 23.297 382.326 33.742L396.928 87.539L396.799 87.574V87.57L339.605 102.699L287.48 116.484L272.826 62.492C271.184 56.434 272.012 50.094 275.162 44.637ZM492.838 467.363C489.602 472.969 484.324 476.98 477.977 478.66L415.586 495.164C413.49 495.719 411.342 496 409.205 496C398.186 496 388.508 488.703 385.674 478.258L371.072 424.461L371.201 424.426V424.43L396.938 417.617L480.52 395.516L495.174 449.508C496.818 455.566 495.988 461.906 492.838 467.363Z" />
        </Icon>
    </>
}