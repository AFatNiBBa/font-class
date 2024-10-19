
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `keyboard-left` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/keyboard-left?s=thin keyboard-left}
 * @preview ![keyboard-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNDQuMDAxIDI4OEgzNjAuMDAxQzM3My4yNTcgMjg4IDM4NC4wMDEgMjc3LjI1NCAzODQuMDAxIDI2NFYyNDhDMzg0LjAwMSAyMzQuNzQ2IDM3My4yNTcgMjI0IDM2MC4wMDEgMjI0SDM0NC4wMDFDMzMwLjc0NyAyMjQgMzIwLjAwMSAyMzQuNzQ2IDMyMC4wMDEgMjQ4VjI2NEMzMjAuMDAxIDI3Ny4yNTQgMzMwLjc0NyAyODggMzQ0LjAwMSAyODhaTTMzNi4wMDEgMjQ4QzMzNi4wMDEgMjQzLjU5IDMzOS41OTEgMjQwIDM0NC4wMDEgMjQwSDM2MC4wMDFDMzY0LjQxMyAyNDAgMzY4LjAwMSAyNDMuNTkgMzY4LjAwMSAyNDhWMjY0QzM2OC4wMDEgMjY4LjQxIDM2NC40MTMgMjcyIDM2MC4wMDEgMjcySDM0NC4wMDFDMzM5LjU5MSAyNzIgMzM2LjAwMSAyNjguNDEgMzM2LjAwMSAyNjRWMjQ4Wk0yNjQuMDAxIDMyMEgyNDguMDAxQzIzNC43NDcgMzIwIDIyNC4wMDEgMzMwLjc0NiAyMjQuMDAxIDM0NFYzNjBDMjI0LjAwMSAzNzMuMjU0IDIzNC43NDcgMzg0IDI0OC4wMDEgMzg0SDI2NC4wMDFDMjc3LjI1NyAzODQgMjg4LjAwMSAzNzMuMjU0IDI4OC4wMDEgMzYwVjM0NEMyODguMDAxIDMzMC43NDYgMjc3LjI1NyAzMjAgMjY0LjAwMSAzMjBaTTI3Mi4wMDEgMzYwQzI3Mi4wMDEgMzY0LjQxIDI2OC40MTMgMzY4IDI2NC4wMDEgMzY4SDI0OC4wMDFDMjQzLjU5MSAzNjggMjQwLjAwMSAzNjQuNDEgMjQwLjAwMSAzNjBWMzQ0QzI0MC4wMDEgMzM5LjU5IDI0My41OTEgMzM2IDI0OC4wMDEgMzM2SDI2NC4wMDFDMjY4LjQxMyAzMzYgMjcyLjAwMSAzMzkuNTkgMjcyLjAwMSAzNDRWMzYwWk0zNDQuMDAxIDE5MkgzNjAuMDAxQzM3My4yNTcgMTkyIDM4NC4wMDEgMTgxLjI1NCAzODQuMDAxIDE2OFYxNTJDMzg0LjAwMSAxMzguNzQ2IDM3My4yNTcgMTI4IDM2MC4wMDEgMTI4SDM0NC4wMDFDMzMwLjc0NyAxMjggMzIwLjAwMSAxMzguNzQ2IDMyMC4wMDEgMTUyVjE2OEMzMjAuMDAxIDE4MS4yNTQgMzMwLjc0NyAxOTIgMzQ0LjAwMSAxOTJaTTMzNi4wMDEgMTUyQzMzNi4wMDEgMTQ3LjU5IDMzOS41OTEgMTQ0IDM0NC4wMDEgMTQ0SDM2MC4wMDFDMzY0LjQxMyAxNDQgMzY4LjAwMSAxNDcuNTkgMzY4LjAwMSAxNTJWMTY4QzM2OC4wMDEgMTcyLjQxIDM2NC40MTMgMTc2IDM2MC4wMDEgMTc2SDM0NC4wMDFDMzM5LjU5MSAxNzYgMzM2LjAwMSAxNzIuNDEgMzM2LjAwMSAxNjhWMTUyWk00NTYuMDAxIDIyNEg0NDAuMDAxQzQyNi43NDcgMjI0IDQxNi4wMDEgMjM0Ljc0NiA0MTYuMDAxIDI0OFYyNjRDNDE2LjAwMSAyNzcuMjU0IDQyNi43NDcgMjg4IDQ0MC4wMDEgMjg4SDQ1Ni4wMDFDNDY5LjI1NyAyODggNDgwLjAwMSAyNzcuMjU0IDQ4MC4wMDEgMjY0VjI0OEM0ODAuMDAxIDIzNC43NDYgNDY5LjI1NyAyMjQgNDU2LjAwMSAyMjRaTTQ2NC4wMDEgMjY0QzQ2NC4wMDEgMjY4LjQxIDQ2MC40MTMgMjcyIDQ1Ni4wMDEgMjcySDQ0MC4wMDFDNDM1LjU5MSAyNzIgNDMyLjAwMSAyNjguNDEgNDMyLjAwMSAyNjRWMjQ4QzQzMi4wMDEgMjQzLjU5IDQzNS41OTEgMjQwIDQ0MC4wMDEgMjQwSDQ1Ni4wMDFDNDYwLjQxMyAyNDAgNDY0LjAwMSAyNDMuNTkgNDY0LjAwMSAyNDhWMjY0Wk01NTIuMDAxIDMyMEg1MzYuMDAxQzUyMi43NDcgMzIwIDUxMi4wMDEgMzMwLjc0NiA1MTIuMDAxIDM0NFYzNjBDNTEyLjAwMSAzNzMuMjU0IDUyMi43NDcgMzg0IDUzNi4wMDEgMzg0SDU1Mi4wMDFDNTY1LjI1NyAzODQgNTc2LjAwMSAzNzMuMjU0IDU3Ni4wMDEgMzYwVjM0NEM1NzYuMDAxIDMzMC43NDYgNTY1LjI1NyAzMjAgNTUyLjAwMSAzMjBaTTU2MC4wMDEgMzYwQzU2MC4wMDEgMzY0LjQxIDU1Ni40MTMgMzY4IDU1Mi4wMDEgMzY4SDUzNi4wMDFDNTMxLjU5MSAzNjggNTI4LjAwMSAzNjQuNDEgNTI4LjAwMSAzNjBWMzQ0QzUyOC4wMDEgMzM5LjU5IDUzMS41OTEgMzM2IDUzNi4wMDEgMzM2SDU1Mi4wMDFDNTU2LjQxMyAzMzYgNTYwLjAwMSAzMzkuNTkgNTYwLjAwMSAzNDRWMzYwWk01NTIuMDAxIDIyNEg1MzYuMDAxQzUyMi43NDcgMjI0IDUxMi4wMDEgMjM0Ljc0NiA1MTIuMDAxIDI0OFYyNjRDNTEyLjAwMSAyNzcuMjU0IDUyMi43NDcgMjg4IDUzNi4wMDEgMjg4SDU1Mi4wMDFDNTY1LjI1NyAyODggNTc2LjAwMSAyNzcuMjU0IDU3Ni4wMDEgMjY0VjI0OEM1NzYuMDAxIDIzNC43NDYgNTY1LjI1NyAyMjQgNTUyLjAwMSAyMjRaTTU2MC4wMDEgMjY0QzU2MC4wMDEgMjY4LjQxIDU1Ni40MTMgMjcyIDU1Mi4wMDEgMjcySDUzNi4wMDFDNTMxLjU5MSAyNzIgNTI4LjAwMSAyNjguNDEgNTI4LjAwMSAyNjRWMjQ4QzUyOC4wMDEgMjQzLjU5IDUzMS41OTEgMjQwIDUzNi4wMDEgMjQwSDU1Mi4wMDFDNTU2LjQxMyAyNDAgNTYwLjAwMSAyNDMuNTkgNTYwLjAwMSAyNDhWMjY0Wk01NTIuMDAxIDEyOEg1MzYuMDAxQzUyMi43NDcgMTI4IDUxMi4wMDEgMTM4Ljc0NiA1MTIuMDAxIDE1MlYxNjhDNTEyLjAwMSAxODEuMjU0IDUyMi43NDcgMTkyIDUzNi4wMDEgMTkySDU1Mi4wMDFDNTY1LjI1NyAxOTIgNTc2LjAwMSAxODEuMjU0IDU3Ni4wMDEgMTY4VjE1MkM1NzYuMDAxIDEzOC43NDYgNTY1LjI1NyAxMjggNTUyLjAwMSAxMjhaTTU2MC4wMDEgMTY4QzU2MC4wMDEgMTcyLjQxIDU1Ni40MTMgMTc2IDU1Mi4wMDEgMTc2SDUzNi4wMDFDNTMxLjU5MSAxNzYgNTI4LjAwMSAxNzIuNDEgNTI4LjAwMSAxNjhWMTUyQzUyOC4wMDEgMTQ3LjU5IDUzMS41OTEgMTQ0IDUzNi4wMDEgMTQ0SDU1Mi4wMDFDNTU2LjQxMyAxNDQgNTYwLjAwMSAxNDcuNTkgNTYwLjAwMSAxNTJWMTY4Wk01NzYuMDAxIDY0SDIyNC4wMDFDMTg4LjY1NSA2NCAxNjAuMDAxIDkyLjY1MiAxNjAuMDAxIDEyOFYzODRDMTYwLjAwMSA0MTkuMzQ4IDE4OC42NTUgNDQ4IDIyNC4wMDEgNDQ4SDU3Ni4wMDFDNjExLjM0OSA0NDggNjQwLjAwMSA0MTkuMzQ4IDY0MC4wMDEgMzg0VjEyOEM2NDAuMDAxIDkyLjY1MiA2MTEuMzQ5IDY0IDU3Ni4wMDEgNjRaTTYyNC4wMDEgMzg0QzYyNC4wMDEgNDEwLjQ2OSA2MDIuNDY4IDQzMiA1NzYuMDAxIDQzMkgyMjQuMDAxQzE5Ny41MzQgNDMyIDE3Ni4wMDEgNDEwLjQ2OSAxNzYuMDAxIDM4NFYxMjhDMTc2LjAwMSAxMDEuNTMxIDE5Ny41MzQgODAgMjI0LjAwMSA4MEg1NzYuMDAxQzYwMi40NjggODAgNjI0LjAwMSAxMDEuNTMxIDYyNC4wMDEgMTI4VjM4NFpNMjY0LjAwMSAxMjhIMjQ4LjAwMUMyMzQuNzQ3IDEyOCAyMjQuMDAxIDEzOC43NDYgMjI0LjAwMSAxNTJWMTY4QzIyNC4wMDEgMTgxLjI1NCAyMzQuNzQ3IDE5MiAyNDguMDAxIDE5MkgyNjQuMDAxQzI3Ny4yNTcgMTkyIDI4OC4wMDEgMTgxLjI1NCAyODguMDAxIDE2OFYxNTJDMjg4LjAwMSAxMzguNzQ2IDI3Ny4yNTcgMTI4IDI2NC4wMDEgMTI4Wk0yNzIuMDAxIDE2OEMyNzIuMDAxIDE3Mi40MSAyNjguNDEzIDE3NiAyNjQuMDAxIDE3NkgyNDguMDAxQzI0My41OTEgMTc2IDI0MC4wMDEgMTcyLjQxIDI0MC4wMDEgMTY4VjE1MkMyNDAuMDAxIDE0Ny41OSAyNDMuNTkxIDE0NCAyNDguMDAxIDE0NEgyNjQuMDAxQzI2OC40MTMgMTQ0IDI3Mi4wMDEgMTQ3LjU5IDI3Mi4wMDEgMTUyVjE2OFpNMjY0LjAwMSAyMjRIMjQ4LjAwMUMyMzQuNzQ3IDIyNCAyMjQuMDAxIDIzNC43NDYgMjI0LjAwMSAyNDhWMjY0QzIyNC4wMDEgMjc3LjI1NCAyMzQuNzQ3IDI4OCAyNDguMDAxIDI4OEgyNjQuMDAxQzI3Ny4yNTcgMjg4IDI4OC4wMDEgMjc3LjI1NCAyODguMDAxIDI2NFYyNDhDMjg4LjAwMSAyMzQuNzQ2IDI3Ny4yNTcgMjI0IDI2NC4wMDEgMjI0Wk0yNzIuMDAxIDI2NEMyNzIuMDAxIDI2OC40MSAyNjguNDEzIDI3MiAyNjQuMDAxIDI3MkgyNDguMDAxQzI0My41OTEgMjcyIDI0MC4wMDEgMjY4LjQxIDI0MC4wMDEgMjY0VjI0OEMyNDAuMDAxIDI0My41OSAyNDMuNTkxIDI0MCAyNDguMDAxIDI0MEgyNjQuMDAxQzI2OC40MTMgMjQwIDI3Mi4wMDEgMjQzLjU5IDI3Mi4wMDEgMjQ4VjI2NFpNNDU2LjAwMSAzMjBIMzQ0LjAwMUMzMzAuNzQ3IDMyMCAzMjAuMDAxIDMzMC43NDYgMzIwLjAwMSAzNDRWMzYwQzMyMC4wMDEgMzczLjI1NCAzMzAuNzQ3IDM4NCAzNDQuMDAxIDM4NEg0NTYuMDAxQzQ2OS4yNTcgMzg0IDQ4MC4wMDEgMzczLjI1NCA0ODAuMDAxIDM2MFYzNDRDNDgwLjAwMSAzMzAuNzQ2IDQ2OS4yNTcgMzIwIDQ1Ni4wMDEgMzIwWk00NjQuMDAxIDM2MEM0NjQuMDAxIDM2NC40MSA0NjAuNDEzIDM2OCA0NTYuMDAxIDM2OEgzNDQuMDAxQzMzOS41OTEgMzY4IDMzNi4wMDEgMzY0LjQxIDMzNi4wMDEgMzYwVjM0NEMzMzYuMDAxIDMzOS41OSAzMzkuNTkxIDMzNiAzNDQuMDAxIDMzNkg0NTYuMDAxQzQ2MC40MTMgMzM2IDQ2NC4wMDEgMzM5LjU5IDQ2NC4wMDEgMzQ0VjM2MFpNNDU2LjAwMSAxMjhINDQwLjAwMUM0MjYuNzQ3IDEyOCA0MTYuMDAxIDEzOC43NDYgNDE2LjAwMSAxNTJWMTY4QzQxNi4wMDEgMTgxLjI1NCA0MjYuNzQ3IDE5MiA0NDAuMDAxIDE5Mkg0NTYuMDAxQzQ2OS4yNTcgMTkyIDQ4MC4wMDEgMTgxLjI1NCA0ODAuMDAxIDE2OFYxNTJDNDgwLjAwMSAxMzguNzQ2IDQ2OS4yNTcgMTI4IDQ1Ni4wMDEgMTI4Wk00NjQuMDAxIDE2OEM0NjQuMDAxIDE3Mi40MSA0NjAuNDEzIDE3NiA0NTYuMDAxIDE3Nkg0NDAuMDAxQzQzNS41OTEgMTc2IDQzMi4wMDEgMTcyLjQxIDQzMi4wMDEgMTY4VjE1MkM0MzIuMDAxIDE0Ny41OSA0MzUuNTkxIDE0NCA0NDAuMDAxIDE0NEg0NTYuMDAxQzQ2MC40MTMgMTQ0IDQ2NC4wMDEgMTQ3LjU5IDQ2NC4wMDEgMTUyVjE2OFpNMTE2LjQ3NCAxNTUuMjAxQzExNC4wMDUgMTU0LjEyNSAxMTEuMzk0IDE1My42MDIgMTA4LjgwMiAxNTMuNjAyQzEwNC4wNDQgMTUzLjYwMiA5OS4zNTQgMTU1LjM2NSA5NS43MzkgMTU4LjcyNUw2LjEzOCAyNDEuOTI2QzIuMDU2IDI0NS43MTUgMC4wMSAyNTAuODM2IDAgMjU1Ljk2MUMtMC4wMSAyNjEuMTEyIDIuMDM1IDI2Ni4yNjcgNi4xMzggMjcwLjA3Nkw5NS43MzkgMzUzLjI3NUM5OS4zNTYgMzU2LjYzNSAxMDQuMDQ4IDM1OC40IDEwOC44MDYgMzU4LjRDMTExLjM5NiAzNTguNCAxMTQuMDA3IDM1Ny44NzcgMTE2LjQ3NCAzNTYuODAzQzEyMy40NzQgMzUzLjc1MiAxMjguMDAxIDM0Ni44MzggMTI4LjAwMSAzMzkuMTk5VjE3Mi44MDFDMTI4LjAwMSAxNjUuMTYyIDEyMy40NzQgMTU4LjI1IDExNi40NzQgMTU1LjIwMVpNMTEyLjAwMSAzMzkuMTk5QzExMi4wMDEgMzQwLjQ3NSAxMTEuMjQ3IDM0MS42MjcgMTA4LjgwNiAzNDIuNEMxMDguMzMzIDM0Mi40IDEwNy40MjMgMzQyLjI4OSAxMDYuNjI2IDM0MS41NTFMMTcuMDI2IDI1OC4zNTJDMTYuMTc5IDI1Ny41NjQgMTUuOTk5IDI1Ni42MzkgMTUuOTk5IDI1NlMxNi4xNzkgMjU0LjQzNiAxNy4wMjQgMjUzLjY1TDEwNi42MjggMTcwLjQ0N0MxMDcuNDIxIDE2OS43MTEgMTA4LjMyOSAxNjkuNjAyIDEwOC44MDIgMTY5LjYwMkwxMTAuMDg1IDE2OS44NjlDMTExLjI0OSAxNzAuMzc3IDExMi4wMDEgMTcxLjUyNyAxMTIuMDAxIDE3Mi44MDFWMzM5LjE5OVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function KeyboardLeft(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M344.001 288H360.001C373.257 288 384.001 277.254 384.001 264V248C384.001 234.746 373.257 224 360.001 224H344.001C330.747 224 320.001 234.746 320.001 248V264C320.001 277.254 330.747 288 344.001 288ZM336.001 248C336.001 243.59 339.591 240 344.001 240H360.001C364.413 240 368.001 243.59 368.001 248V264C368.001 268.41 364.413 272 360.001 272H344.001C339.591 272 336.001 268.41 336.001 264V248ZM264.001 320H248.001C234.747 320 224.001 330.746 224.001 344V360C224.001 373.254 234.747 384 248.001 384H264.001C277.257 384 288.001 373.254 288.001 360V344C288.001 330.746 277.257 320 264.001 320ZM272.001 360C272.001 364.41 268.413 368 264.001 368H248.001C243.591 368 240.001 364.41 240.001 360V344C240.001 339.59 243.591 336 248.001 336H264.001C268.413 336 272.001 339.59 272.001 344V360ZM344.001 192H360.001C373.257 192 384.001 181.254 384.001 168V152C384.001 138.746 373.257 128 360.001 128H344.001C330.747 128 320.001 138.746 320.001 152V168C320.001 181.254 330.747 192 344.001 192ZM336.001 152C336.001 147.59 339.591 144 344.001 144H360.001C364.413 144 368.001 147.59 368.001 152V168C368.001 172.41 364.413 176 360.001 176H344.001C339.591 176 336.001 172.41 336.001 168V152ZM456.001 224H440.001C426.747 224 416.001 234.746 416.001 248V264C416.001 277.254 426.747 288 440.001 288H456.001C469.257 288 480.001 277.254 480.001 264V248C480.001 234.746 469.257 224 456.001 224ZM464.001 264C464.001 268.41 460.413 272 456.001 272H440.001C435.591 272 432.001 268.41 432.001 264V248C432.001 243.59 435.591 240 440.001 240H456.001C460.413 240 464.001 243.59 464.001 248V264ZM552.001 320H536.001C522.747 320 512.001 330.746 512.001 344V360C512.001 373.254 522.747 384 536.001 384H552.001C565.257 384 576.001 373.254 576.001 360V344C576.001 330.746 565.257 320 552.001 320ZM560.001 360C560.001 364.41 556.413 368 552.001 368H536.001C531.591 368 528.001 364.41 528.001 360V344C528.001 339.59 531.591 336 536.001 336H552.001C556.413 336 560.001 339.59 560.001 344V360ZM552.001 224H536.001C522.747 224 512.001 234.746 512.001 248V264C512.001 277.254 522.747 288 536.001 288H552.001C565.257 288 576.001 277.254 576.001 264V248C576.001 234.746 565.257 224 552.001 224ZM560.001 264C560.001 268.41 556.413 272 552.001 272H536.001C531.591 272 528.001 268.41 528.001 264V248C528.001 243.59 531.591 240 536.001 240H552.001C556.413 240 560.001 243.59 560.001 248V264ZM552.001 128H536.001C522.747 128 512.001 138.746 512.001 152V168C512.001 181.254 522.747 192 536.001 192H552.001C565.257 192 576.001 181.254 576.001 168V152C576.001 138.746 565.257 128 552.001 128ZM560.001 168C560.001 172.41 556.413 176 552.001 176H536.001C531.591 176 528.001 172.41 528.001 168V152C528.001 147.59 531.591 144 536.001 144H552.001C556.413 144 560.001 147.59 560.001 152V168ZM576.001 64H224.001C188.655 64 160.001 92.652 160.001 128V384C160.001 419.348 188.655 448 224.001 448H576.001C611.349 448 640.001 419.348 640.001 384V128C640.001 92.652 611.349 64 576.001 64ZM624.001 384C624.001 410.469 602.468 432 576.001 432H224.001C197.534 432 176.001 410.469 176.001 384V128C176.001 101.531 197.534 80 224.001 80H576.001C602.468 80 624.001 101.531 624.001 128V384ZM264.001 128H248.001C234.747 128 224.001 138.746 224.001 152V168C224.001 181.254 234.747 192 248.001 192H264.001C277.257 192 288.001 181.254 288.001 168V152C288.001 138.746 277.257 128 264.001 128ZM272.001 168C272.001 172.41 268.413 176 264.001 176H248.001C243.591 176 240.001 172.41 240.001 168V152C240.001 147.59 243.591 144 248.001 144H264.001C268.413 144 272.001 147.59 272.001 152V168ZM264.001 224H248.001C234.747 224 224.001 234.746 224.001 248V264C224.001 277.254 234.747 288 248.001 288H264.001C277.257 288 288.001 277.254 288.001 264V248C288.001 234.746 277.257 224 264.001 224ZM272.001 264C272.001 268.41 268.413 272 264.001 272H248.001C243.591 272 240.001 268.41 240.001 264V248C240.001 243.59 243.591 240 248.001 240H264.001C268.413 240 272.001 243.59 272.001 248V264ZM456.001 320H344.001C330.747 320 320.001 330.746 320.001 344V360C320.001 373.254 330.747 384 344.001 384H456.001C469.257 384 480.001 373.254 480.001 360V344C480.001 330.746 469.257 320 456.001 320ZM464.001 360C464.001 364.41 460.413 368 456.001 368H344.001C339.591 368 336.001 364.41 336.001 360V344C336.001 339.59 339.591 336 344.001 336H456.001C460.413 336 464.001 339.59 464.001 344V360ZM456.001 128H440.001C426.747 128 416.001 138.746 416.001 152V168C416.001 181.254 426.747 192 440.001 192H456.001C469.257 192 480.001 181.254 480.001 168V152C480.001 138.746 469.257 128 456.001 128ZM464.001 168C464.001 172.41 460.413 176 456.001 176H440.001C435.591 176 432.001 172.41 432.001 168V152C432.001 147.59 435.591 144 440.001 144H456.001C460.413 144 464.001 147.59 464.001 152V168ZM116.474 155.201C114.005 154.125 111.394 153.602 108.802 153.602C104.044 153.602 99.354 155.365 95.739 158.725L6.138 241.926C2.056 245.715 0.01 250.836 0 255.961C-0.01 261.112 2.035 266.267 6.138 270.076L95.739 353.275C99.356 356.635 104.048 358.4 108.806 358.4C111.396 358.4 114.007 357.877 116.474 356.803C123.474 353.752 128.001 346.838 128.001 339.199V172.801C128.001 165.162 123.474 158.25 116.474 155.201ZM112.001 339.199C112.001 340.475 111.247 341.627 108.806 342.4C108.333 342.4 107.423 342.289 106.626 341.551L17.026 258.352C16.179 257.564 15.999 256.639 15.999 256S16.179 254.436 17.024 253.65L106.628 170.447C107.421 169.711 108.329 169.602 108.802 169.602L110.085 169.869C111.249 170.377 112.001 171.527 112.001 172.801V339.199Z" />
        </Icon>
    </>
}