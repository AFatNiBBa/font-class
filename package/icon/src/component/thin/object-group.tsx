
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `object-group` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/object-group?s=thin object-group}
 * @preview ![object-group](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODggMjQ4VjE2OEMyODggMTQ1LjkzOCAyNzAuMDYyIDEyOCAyNDggMTI4SDEzNkMxMTMuOTM4IDEyOCA5NiAxNDUuOTM4IDk2IDE2OFYyNDhDOTYgMjcwLjA2MiAxMTMuOTM4IDI4OCAxMzYgMjg4SDI0OEMyNzAuMDYyIDI4OCAyODggMjcwLjA2MiAyODggMjQ4Wk0xMTIgMjQ4VjE2OEMxMTIgMTU0Ljc2NiAxMjIuNzY2IDE0NCAxMzYgMTQ0SDI0OEMyNjEuMjM0IDE0NCAyNzIgMTU0Ljc2NiAyNzIgMTY4VjI0OEMyNzIgMjYxLjIzNCAyNjEuMjM0IDI3MiAyNDggMjcySDEzNkMxMjIuNzY2IDI3MiAxMTIgMjYxLjIzNCAxMTIgMjQ4Wk00ODAgMTI4QzQ5Ny42NzQgMTI4IDUxMiAxMTMuNjc0IDUxMiA5NlY2NEM1MTIgNDYuMzI2IDQ5Ny42NzQgMzIgNDgwIDMySDQ0OEM0MzAuMzI4IDMyIDQxNiA0Ni4zMjYgNDE2IDY0VjcySDk2VjY0Qzk2IDQ2LjMyNiA4MS42NzQgMzIgNjQgMzJIMzJDMTQuMzI4IDMyIDAgNDYuMzI2IDAgNjRWOTZDMCAxMTMuNjc0IDE0LjMyOCAxMjggMzIgMTI4SDQwVjM4NEgzMkMxNC4zMjggMzg0IDAgMzk4LjMyNiAwIDQxNlY0NDhDMCA0NjUuNjc0IDE0LjMyOCA0ODAgMzIgNDgwSDY0QzgxLjY3NCA0ODAgOTYgNDY1LjY3NCA5NiA0NDhWNDQwSDQxNlY0NDhDNDE2IDQ2NS42NzQgNDMwLjMyOCA0ODAgNDQ4IDQ4MEg0ODBDNDk3LjY3NCA0ODAgNTEyIDQ2NS42NzQgNTEyIDQ0OFY0MTZDNTEyIDM5OC4zMjYgNDk3LjY3NCAzODQgNDgwIDM4NEg0NzJWMTI4SDQ4MFpNNDMyIDY0QzQzMiA1NS4xNzggNDM5LjE3OCA0OCA0NDggNDhINDgwQzQ4OC44MjIgNDggNDk2IDU1LjE3OCA0OTYgNjRWOTZDNDk2IDEwNC44MjIgNDg4LjgyMiAxMTIgNDgwIDExMkg0NDhDNDM5LjE3OCAxMTIgNDMyIDEwNC44MjIgNDMyIDk2VjY0Wk0zMiAxMTJDMjMuMTc4IDExMiAxNiAxMDQuODIyIDE2IDk2VjY0QzE2IDU1LjE3OCAyMy4xNzggNDggMzIgNDhINjRDNzIuODIyIDQ4IDgwIDU1LjE3OCA4MCA2NFY5NkM4MCAxMDQuODIyIDcyLjgyMiAxMTIgNjQgMTEySDMyWk04MCA0NDhDODAgNDU2LjgyMiA3Mi44MjIgNDY0IDY0IDQ2NEgzMkMyMy4xNzggNDY0IDE2IDQ1Ni44MjIgMTYgNDQ4VjQxNkMxNiA0MDcuMTc4IDIzLjE3OCA0MDAgMzIgNDAwSDY0QzcyLjgyMiA0MDAgODAgNDA3LjE3OCA4MCA0MTZWNDQ4Wk00ODAgNDAwQzQ4OC44MjIgNDAwIDQ5NiA0MDcuMTc4IDQ5NiA0MTZWNDQ4QzQ5NiA0NTYuODIyIDQ4OC44MjIgNDY0IDQ4MCA0NjRINDQ4QzQzOS4xNzggNDY0IDQzMiA0NTYuODIyIDQzMiA0NDhWNDE2QzQzMiA0MDcuMTc4IDQzOS4xNzggNDAwIDQ0OCA0MDBINDgwWk00NTYgMzg0SDQ0OEM0MzAuMzI4IDM4NCA0MTYgMzk4LjMyNiA0MTYgNDE2VjQyNEg5NlY0MTZDOTYgMzk4LjMyNiA4MS42NzQgMzg0IDY0IDM4NEg1NlYxMjhINjRDODEuNjc0IDEyOCA5NiAxMTMuNjc0IDk2IDk2Vjg4SDQxNlY5NkM0MTYgMTEzLjY3NCA0MzAuMzI4IDEyOCA0NDggMTI4SDQ1NlYzODRaTTQxNiAyNjRWMzQ0QzQxNiAzNjYuMDYyIDM5OC4wNjIgMzg0IDM3NiAzODRIMjY0QzI0MS45MzggMzg0IDIyNCAzNjYuMDYyIDIyNCAzNDRWMzIwQzIyNCAzMTUuNTc4IDIyNy41NzggMzEyIDIzMiAzMTJTMjQwIDMxNS41NzggMjQwIDMyMFYzNDRDMjQwIDM1Ny4yMzQgMjUwLjc2NiAzNjggMjY0IDM2OEgzNzZDMzg5LjIzNCAzNjggNDAwIDM1Ny4yMzQgNDAwIDM0NFYyNjRDNDAwIDI1MC43NjYgMzg5LjIzNCAyNDAgMzc2IDI0MEgzMjBDMzE1LjU3OCAyNDAgMzEyIDIzNi40MjIgMzEyIDIzMlMzMTUuNTc4IDIyNCAzMjAgMjI0SDM3NkMzOTguMDYyIDIyNCA0MTYgMjQxLjkzOCA0MTYgMjY0WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function ObjectGroup(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M288 248V168C288 145.938 270.062 128 248 128H136C113.938 128 96 145.938 96 168V248C96 270.062 113.938 288 136 288H248C270.062 288 288 270.062 288 248ZM112 248V168C112 154.766 122.766 144 136 144H248C261.234 144 272 154.766 272 168V248C272 261.234 261.234 272 248 272H136C122.766 272 112 261.234 112 248ZM480 128C497.674 128 512 113.674 512 96V64C512 46.326 497.674 32 480 32H448C430.328 32 416 46.326 416 64V72H96V64C96 46.326 81.674 32 64 32H32C14.328 32 0 46.326 0 64V96C0 113.674 14.328 128 32 128H40V384H32C14.328 384 0 398.326 0 416V448C0 465.674 14.328 480 32 480H64C81.674 480 96 465.674 96 448V440H416V448C416 465.674 430.328 480 448 480H480C497.674 480 512 465.674 512 448V416C512 398.326 497.674 384 480 384H472V128H480ZM432 64C432 55.178 439.178 48 448 48H480C488.822 48 496 55.178 496 64V96C496 104.822 488.822 112 480 112H448C439.178 112 432 104.822 432 96V64ZM32 112C23.178 112 16 104.822 16 96V64C16 55.178 23.178 48 32 48H64C72.822 48 80 55.178 80 64V96C80 104.822 72.822 112 64 112H32ZM80 448C80 456.822 72.822 464 64 464H32C23.178 464 16 456.822 16 448V416C16 407.178 23.178 400 32 400H64C72.822 400 80 407.178 80 416V448ZM480 400C488.822 400 496 407.178 496 416V448C496 456.822 488.822 464 480 464H448C439.178 464 432 456.822 432 448V416C432 407.178 439.178 400 448 400H480ZM456 384H448C430.328 384 416 398.326 416 416V424H96V416C96 398.326 81.674 384 64 384H56V128H64C81.674 128 96 113.674 96 96V88H416V96C416 113.674 430.328 128 448 128H456V384ZM416 264V344C416 366.062 398.062 384 376 384H264C241.938 384 224 366.062 224 344V320C224 315.578 227.578 312 232 312S240 315.578 240 320V344C240 357.234 250.766 368 264 368H376C389.234 368 400 357.234 400 344V264C400 250.766 389.234 240 376 240H320C315.578 240 312 236.422 312 232S315.578 224 320 224H376C398.062 224 416 241.938 416 264Z" />
        </Icon>
    </>
}