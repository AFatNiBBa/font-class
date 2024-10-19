
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `fax` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/fax?s=regular fax}
 * @preview ![fax](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNTIgNDMySDM4NEMzOTIuODc1IDQzMiA0MDAgNDI0Ljg3NSA0MDAgNDE2VjM4NEM0MDAgMzc1LjEyNSAzOTIuODc1IDM2OCAzODQgMzY4SDM1MkMzNDMuMTI1IDM2OCAzMzYgMzc1LjEyNSAzMzYgMzg0VjQxNkMzMzYgNDI0Ljg3NSAzNDMuMTI1IDQzMiAzNTIgNDMyWk0zNTIgMzM2SDM4NEMzOTIuODc1IDMzNiA0MDAgMzI4Ljg3NSA0MDAgMzIwVjI4OEM0MDAgMjc5LjEyNSAzOTIuODc1IDI3MiAzODQgMjcySDM1MkMzNDMuMTI1IDI3MiAzMzYgMjc5LjEyNSAzMzYgMjg4VjMyMEMzMzYgMzI4Ljg3NSAzNDMuMTI1IDMzNiAzNTIgMzM2Wk0yNTYgMzM2SDI4OEMyOTYuODc1IDMzNiAzMDQgMzI4Ljg3NSAzMDQgMzIwVjI4OEMzMDQgMjc5LjEyNSAyOTYuODc1IDI3MiAyODggMjcySDI1NkMyNDcuMTI1IDI3MiAyNDAgMjc5LjEyNSAyNDAgMjg4VjMyMEMyNDAgMzI4Ljg3NSAyNDcuMTI1IDMzNiAyNTYgMzM2Wk00NjQgMTkySDE3Ni4wMDhMMTc1Ljk5OCA0OEgzOTguMDYxTDQzMiA4MS45NDNWMTYwSDQ4MFY4MS45NDNDNDgwIDY5LjIxMyA0NzQuOTQzIDU3LjAwNiA0NjUuOTQzIDQ4LjAwNEw0MzIuMDA0IDE0LjA2MUM0MjMuMDAyIDUuMDU3IDQxMC43OTMgMCAzOTguMDYxIDBIMTc1Ljk5OEMxNDkuNDg4IDAgMTI3Ljk5OCAyMS40OTIgMTI3Ljk5OCA0OC4wMDJMMTI4LjAwNCAxMzAuMjY0QzEyMi44NTkgMTI4LjkzMiAxMTcuNTYxIDEyOCAxMTIgMTI4SDY0QzI4LjY1NCAxMjggMCAxNTYuNjU0IDAgMTkyVjQ0OEMwIDQ4My4zNDYgMjguNjU0IDUxMiA2NCA1MTJINDY0QzQ5MC40NjkgNTEyIDUxMiA0OTAuNDY5IDUxMiA0NjRWMjQwQzUxMiAyMTMuNTMxIDQ5MC40NjkgMTkyIDQ2NCAxOTJaTTEyOCA0NDhDMTI4IDQ1Ni44MjIgMTIwLjgyMiA0NjQgMTEyIDQ2NEg2NEM1NS4xNzggNDY0IDQ4IDQ1Ni44MjIgNDggNDQ4VjE5MkM0OCAxODMuMTc4IDU1LjE3OCAxNzYgNjQgMTc2SDExMkMxMjAuODIyIDE3NiAxMjggMTgzLjE3OCAxMjggMTkyVjQ0OFpNNDY0IDQ2NEgxNzMuNzM2QzE3NS4wNjggNDU4Ljg1NyAxNzYgNDUzLjU1OSAxNzYgNDQ4VjI0MEg0NjRWNDY0Wk0yNTYgNDMySDI4OEMyOTYuODc1IDQzMiAzMDQgNDI0Ljg3NSAzMDQgNDE2VjM4NEMzMDQgMzc1LjEyNSAyOTYuODc1IDM2OCAyODggMzY4SDI1NkMyNDcuMTI1IDM2OCAyNDAgMzc1LjEyNSAyNDAgMzg0VjQxNkMyNDAgNDI0Ljg3NSAyNDcuMTI1IDQzMiAyNTYgNDMyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Fax(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M352 432H384C392.875 432 400 424.875 400 416V384C400 375.125 392.875 368 384 368H352C343.125 368 336 375.125 336 384V416C336 424.875 343.125 432 352 432ZM352 336H384C392.875 336 400 328.875 400 320V288C400 279.125 392.875 272 384 272H352C343.125 272 336 279.125 336 288V320C336 328.875 343.125 336 352 336ZM256 336H288C296.875 336 304 328.875 304 320V288C304 279.125 296.875 272 288 272H256C247.125 272 240 279.125 240 288V320C240 328.875 247.125 336 256 336ZM464 192H176.008L175.998 48H398.061L432 81.943V160H480V81.943C480 69.213 474.943 57.006 465.943 48.004L432.004 14.061C423.002 5.057 410.793 0 398.061 0H175.998C149.488 0 127.998 21.492 127.998 48.002L128.004 130.264C122.859 128.932 117.561 128 112 128H64C28.654 128 0 156.654 0 192V448C0 483.346 28.654 512 64 512H464C490.469 512 512 490.469 512 464V240C512 213.531 490.469 192 464 192ZM128 448C128 456.822 120.822 464 112 464H64C55.178 464 48 456.822 48 448V192C48 183.178 55.178 176 64 176H112C120.822 176 128 183.178 128 192V448ZM464 464H173.736C175.068 458.857 176 453.559 176 448V240H464V464ZM256 432H288C296.875 432 304 424.875 304 416V384C304 375.125 296.875 368 288 368H256C247.125 368 240 375.125 240 384V416C240 424.875 247.125 432 256 432Z" />
        </Icon>
    </>
}