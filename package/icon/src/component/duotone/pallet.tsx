
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `pallet` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/pallet?s=duotone pallet}
 * @preview ![pallet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYyNCAzODRDNjMyLjc1IDM4NCA2NDAgMzc2Ljc1IDY0MCAzNjhWMzM2QzY0MCAzMjcuMjUgNjMyLjc1IDMyMCA2MjQgMzIwSDE2QzcuMjUgMzIwIDAgMzI3LjI1IDAgMzM2VjM2OEMwIDM3Ni43NSA3LjI1IDM4NCAxNiAzODRINjRWNDQ4SDE2QzcuMjUgNDQ4IDAgNDU1LjI1IDAgNDY0VjQ5NkMwIDUwNC43NSA3LjI1IDUxMiAxNiA1MTJINjI0QzYzMi43NSA1MTIgNjQwIDUwNC43NSA2NDAgNDk2VjQ2NEM2NDAgNDU1LjI1IDYzMi43NSA0NDggNjI0IDQ0OEg1NzZWMzg0SDYyNFpNMjg4IDQ0OEgxMjhWMzg0SDI4OFY0NDhaTTUxMiA0NDhIMzUyVjM4NEg1MTJWNDQ4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Pallet(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M624 384C632.75 384 640 376.75 640 368V336C640 327.25 632.75 320 624 320H16C7.25 320 0 327.25 0 336V368C0 376.75 7.25 384 16 384H64V448H16C7.25 448 0 455.25 0 464V496C0 504.75 7.25 512 16 512H624C632.75 512 640 504.75 640 496V464C640 455.25 632.75 448 624 448H576V384H624ZM288 448H128V384H288V448ZM512 448H352V384H512V448Z" />
        </Icon>
    </>
}