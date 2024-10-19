
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `sliders` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/sliders?s=thin sliders}
 * @preview ![sliders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTUuOTg2IDE2MEMyNzMuNjYgMTYwIDI4Ny45ODYgMTQ1LjY3MiAyODcuOTg2IDEyOFYxMDRINTA0QzUwOC40MDYgMTA0IDUxMiAxMDAuNDIyIDUxMiA5NlM1MDguNDA2IDg4IDUwNCA4OEgyODcuOTg2VjY0QzI4Ny45ODYgNDYuMzI2IDI3My42NiAzMiAyNTUuOTg2IDMyUzIyMy45ODYgNDYuMzI2IDIyMy45ODYgNjRWMTI4QzIyMy45ODYgMTQ1LjY3MiAyMzguMzEyIDE2MCAyNTUuOTg2IDE2MFpNMjM5Ljk4NiA2NEMyMzkuOTg2IDU1LjE3OCAyNDcuMTY0IDQ4IDI1NS45ODYgNDhTMjcxLjk4NiA1NS4xNzggMjcxLjk4NiA2NFYxMjhDMjcxLjk4NiAxMzYuODIyIDI2NC44MDkgMTQ0IDI1NS45ODYgMTQ0UzIzOS45ODYgMTM2LjgyMiAyMzkuOTg2IDEyOFY2NFpNNTA0IDQwOEgxOTEuOTg2VjM4NEMxOTEuOTg2IDM2Ni4zMjYgMTc3LjY2IDM1MiAxNTkuOTg2IDM1MlMxMjcuOTg2IDM2Ni4zMjYgMTI3Ljk4NiAzODRWNDQ4QzEyNy45ODYgNDY1LjY3MiAxNDIuMzEzIDQ4MCAxNTkuOTg2IDQ4MFMxOTEuOTg2IDQ2NS42NzIgMTkxLjk4NiA0NDhWNDI0SDUwNEM1MDguNDA2IDQyNCA1MTIgNDIwLjQyMiA1MTIgNDE2UzUwOC40MDYgNDA4IDUwNCA0MDhaTTE3NS45ODYgNDQ4QzE3NS45ODYgNDU2LjgyMiAxNjguODA5IDQ2NCAxNTkuOTg2IDQ2NFMxNDMuOTg2IDQ1Ni44MjIgMTQzLjk4NiA0NDhWMzg0QzE0My45ODYgMzc1LjE3OCAxNTEuMTY0IDM2OCAxNTkuOTg2IDM2OFMxNzUuOTg2IDM3NS4xNzggMTc1Ljk4NiAzODRWNDQ4Wk04IDEwNEgxODRDMTg4LjQwNiAxMDQgMTkyIDEwMC40MjIgMTkyIDk2UzE4OC40MDYgODggMTg0IDg4SDhDMy41OTQgODggMCA5MS41NzggMCA5NlMzLjU5NCAxMDQgOCAxMDRaTTUwNCAyNDhINDE2QzQxNS45OTQgMjQ4IDQxNS45OTIgMjQ4LjAwNiA0MTUuOTg2IDI0OC4wMDZWMjI0QzQxNS45ODYgMjA2LjMyNiA0MDEuNjYgMTkyIDM4My45ODYgMTkyUzM1MS45ODYgMjA2LjMyNiAzNTEuOTg2IDIyNFYyODhDMzUxLjk4NiAzMDUuNjcyIDM2Ni4zMTMgMzIwIDM4My45ODYgMzIwUzQxNS45ODYgMzA1LjY3MiA0MTUuOTg2IDI4OFYyNjMuOTk0QzQxNS45OTIgMjYzLjk5NCA0MTUuOTk0IDI2NCA0MTYgMjY0SDUwNEM1MDguNDA2IDI2NCA1MTIgMjYwLjQyMiA1MTIgMjU2UzUwOC40MDYgMjQ4IDUwNCAyNDhaTTM5OS45ODYgMjg4QzM5OS45ODYgMjk2LjgyMiAzOTIuODA5IDMwNCAzODMuOTg2IDMwNFMzNjcuOTg2IDI5Ni44MjIgMzY3Ljk4NiAyODhWMjI0QzM2Ny45ODYgMjE1LjE3OCAzNzUuMTY0IDIwOCAzODMuOTg2IDIwOFMzOTkuOTg2IDIxNS4xNzggMzk5Ljk4NiAyMjRWMjg4Wk04OCA0MDhIOEMzLjU5NCA0MDggMCA0MTEuNTc4IDAgNDE2UzMuNTk0IDQyNCA4IDQyNEg4OEM5Mi40MDYgNDI0IDk2IDQyMC40MjIgOTYgNDE2UzkyLjQwNiA0MDggODggNDA4Wk04IDI2NEgzMTJDMzE2LjQwNiAyNjQgMzIwIDI2MC40MjIgMzIwIDI1NlMzMTYuNDA2IDI0OCAzMTIgMjQ4SDhDMy41OTQgMjQ4IDAgMjUxLjU3OCAwIDI1NlMzLjU5NCAyNjQgOCAyNjRaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Sliders(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M255.986 160C273.66 160 287.986 145.672 287.986 128V104H504C508.406 104 512 100.422 512 96S508.406 88 504 88H287.986V64C287.986 46.326 273.66 32 255.986 32S223.986 46.326 223.986 64V128C223.986 145.672 238.312 160 255.986 160ZM239.986 64C239.986 55.178 247.164 48 255.986 48S271.986 55.178 271.986 64V128C271.986 136.822 264.809 144 255.986 144S239.986 136.822 239.986 128V64ZM504 408H191.986V384C191.986 366.326 177.66 352 159.986 352S127.986 366.326 127.986 384V448C127.986 465.672 142.313 480 159.986 480S191.986 465.672 191.986 448V424H504C508.406 424 512 420.422 512 416S508.406 408 504 408ZM175.986 448C175.986 456.822 168.809 464 159.986 464S143.986 456.822 143.986 448V384C143.986 375.178 151.164 368 159.986 368S175.986 375.178 175.986 384V448ZM8 104H184C188.406 104 192 100.422 192 96S188.406 88 184 88H8C3.594 88 0 91.578 0 96S3.594 104 8 104ZM504 248H416C415.994 248 415.992 248.006 415.986 248.006V224C415.986 206.326 401.66 192 383.986 192S351.986 206.326 351.986 224V288C351.986 305.672 366.313 320 383.986 320S415.986 305.672 415.986 288V263.994C415.992 263.994 415.994 264 416 264H504C508.406 264 512 260.422 512 256S508.406 248 504 248ZM399.986 288C399.986 296.822 392.809 304 383.986 304S367.986 296.822 367.986 288V224C367.986 215.178 375.164 208 383.986 208S399.986 215.178 399.986 224V288ZM88 408H8C3.594 408 0 411.578 0 416S3.594 424 8 424H88C92.406 424 96 420.422 96 416S92.406 408 88 408ZM8 264H312C316.406 264 320 260.422 320 256S316.406 248 312 248H8C3.594 248 0 251.578 0 256S3.594 264 8 264Z" />
        </Icon>
    </>
}