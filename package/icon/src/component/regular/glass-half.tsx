
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `glass-half` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/glass-half?s=regular glass-half}
 * @preview ![glass-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTEuODU2IDBIMzIuMTQ3QzEzLjQxNiAwIC0xLjM0OCAxNS44NzkgMC4wOTggMzQuNDcxTDMyLjY1OCA0NTIuOTQxQzM1LjI1MiA0ODYuMjcxIDYzLjE3NiA1MTIgOTYuNzU2IDUxMkgyOTMuNTMxQzMyNy40NzkgNTEyIDM1NS41NzQgNDg1LjcyMyAzNTcuNjkzIDQ1MS45OTJMMzgzLjkzOCAzMy45OTZDMzg1LjA5MiAxNS41NzQgMzcwLjM5NSAwIDM1MS44NTYgMFpNMzM0Ljk2MyA0OEwzMjIuOTA4IDI0MEg2NC4yMzZMNDkuMjk3IDQ4SDMzNC45NjNaTTI5My41MzEgNDY0SDk2Ljc1NkM4OC4yOTMgNDY0IDgxLjE2IDQ1Ny41MDYgODAuNTE0IDQ0OS4yMTdMNjcuOTcxIDI4OEgzMTkuODk3TDMwOS43ODkgNDQ4Ljk4MkMzMDkuMjYgNDU3LjQwMiAzMDIuMTE3IDQ2NCAyOTMuNTMxIDQ2NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function GlassHalf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M351.856 0H32.147C13.416 0 -1.348 15.879 0.098 34.471L32.658 452.941C35.252 486.271 63.176 512 96.756 512H293.531C327.479 512 355.574 485.723 357.693 451.992L383.938 33.996C385.092 15.574 370.395 0 351.856 0ZM334.963 48L322.908 240H64.236L49.297 48H334.963ZM293.531 464H96.756C88.293 464 81.16 457.506 80.514 449.217L67.971 288H319.897L309.789 448.982C309.26 457.402 302.117 464 293.531 464Z" />
        </Icon>
    </>
}