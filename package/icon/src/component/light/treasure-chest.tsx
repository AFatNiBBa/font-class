
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `treasure-chest` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/treasure-chest?s=light treasure-chest}
 * @preview ![treasure-chest](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00NDggMzJIMTI4QzU3LjMwOSAzMiAwIDg5LjMwNyAwIDE2MFY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDUxMkM1NDcuMzQ4IDQ4MCA1NzYgNDUxLjM0NiA1NzYgNDE2VjE2MEM1NzYgODkuMzA3IDUxOC42OTMgMzIgNDQ4IDMyWk05NiA0NDhINjRDNDYuMzU1IDQ0OCAzMiA0MzMuNjQ1IDMyIDQxNlYyODhIOTZWNDQ4Wk05NiAyNTZIMzJWMTYwQzMyIDExOC4zNCA1OC44MzYgODMuMTUyIDk2IDY5Ljg5OFYyNTZaTTQ0OCA0NDhIMTI4VjI4OEgxOTJWMzM2QzE5MiAzNjIuNSAyMTMuNSAzODQgMjQwIDM4NEgzMzZDMzYyLjUgMzg0IDM4NCAzNjIuNSAzODQgMzM2VjI4OEg0NDhWNDQ4Wk0yMjQgMzM2VjIwOEMyMjQgMTk5LjEyNSAyMzEuMTI1IDE5MiAyNDAgMTkySDMzNkMzNDQuODc1IDE5MiAzNTIgMTk5LjEyNSAzNTIgMjA4VjMzNkMzNTIgMzQ0Ljg3NSAzNDQuODc1IDM1MiAzMzYgMzUySDI0MEMyMzEuMTI1IDM1MiAyMjQgMzQ0Ljg3NSAyMjQgMzM2Wk00NDggMjU2SDM4NFYyMDhDMzg0IDE4MS41IDM2Mi41IDE2MCAzMzYgMTYwSDI0MEMyMTMuNSAxNjAgMTkyIDE4MS41IDE5MiAyMDhWMjU2SDEyOFY2NEg0NDhWMjU2Wk01NDQgNDE2QzU0NCA0MzMuNjQ1IDUyOS42NDUgNDQ4IDUxMiA0NDhINDgwVjI4OEg1NDRWNDE2Wk01NDQgMjU2SDQ4MFY2OS44OThDNTE3LjE2NiA4My4xNTIgNTQ0IDExOC4zNCA1NDQgMTYwVjI1NlpNMjg4IDMyMEMyOTYuODc1IDMyMCAzMDQgMzEyLjg3NSAzMDQgMzA0VjI0MEMzMDQgMjMxLjEyNSAyOTYuODc1IDIyNCAyODggMjI0UzI3MiAyMzEuMTI1IDI3MiAyNDBWMzA0QzI3MiAzMTIuODc1IDI3OS4xMjUgMzIwIDI4OCAzMjBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function TreasureChest(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M448 32H128C57.309 32 0 89.307 0 160V416C0 451.346 28.654 480 64 480H512C547.348 480 576 451.346 576 416V160C576 89.307 518.693 32 448 32ZM96 448H64C46.355 448 32 433.645 32 416V288H96V448ZM96 256H32V160C32 118.34 58.836 83.152 96 69.898V256ZM448 448H128V288H192V336C192 362.5 213.5 384 240 384H336C362.5 384 384 362.5 384 336V288H448V448ZM224 336V208C224 199.125 231.125 192 240 192H336C344.875 192 352 199.125 352 208V336C352 344.875 344.875 352 336 352H240C231.125 352 224 344.875 224 336ZM448 256H384V208C384 181.5 362.5 160 336 160H240C213.5 160 192 181.5 192 208V256H128V64H448V256ZM544 416C544 433.645 529.645 448 512 448H480V288H544V416ZM544 256H480V69.898C517.166 83.152 544 118.34 544 160V256ZM288 320C296.875 320 304 312.875 304 304V240C304 231.125 296.875 224 288 224S272 231.125 272 240V304C272 312.875 279.125 320 288 320Z" />
        </Icon>
    </>
}