
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-maximize` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-maximize?s=thin arrows-maximize}
 * @preview ![arrows-maximize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MzIuMDAyIDE4NFY1OS4zMTJMMjM1LjMxMiAyNTZMNDMyLjAwMiA0NTIuNjg4VjMyOEM0MzIuMDAyIDMyMy41NzggNDM1LjU4MiAzMjAgNDQwIDMyMEM0NDQuNDI0IDMyMCA0NDggMzIzLjU3OCA0NDggMzI4VjQ3MkM0NDggNDc2LjQyNiA0NDQuNDE2IDQ4MCA0NDAgNDgwSDI5NkMyOTEuNTU5IDQ4MCAyODggNDc2LjQwNiAyODggNDcyQzI4OCA0NjcuNTgyIDI5MS41OCA0NjQgMjk2IDQ2NEg0MjAuNjg4TDIyNCAyNjcuMzEyTDI3LjMxMiA0NjRIMTUyQzE1Ni40MiA0NjQgMTYwIDQ2Ny41ODIgMTYwIDQ3MkMxNjAgNDc2LjQwNiAxNTYuNDM5IDQ4MCAxNTIgNDgwSDhDMy41NzYgNDgwIDAgNDc2LjQxOCAwIDQ3MlYzMjhDMCAzMjMuNTc0IDMuNTggMzIwIDggMzIwQzEyLjQxOCAzMjAgMTUuOTk4IDMyMy41NzggMTUuOTk4IDMyOFY0NTIuNjg4TDIxMi42ODggMjU2TDE1Ljk5OCA1OS4zMTJWMTg0QzE1Ljk5OCAxODguNDIyIDEyLjQxOCAxOTIgOCAxOTJDMy41NzYgMTkyIDAgMTg4LjQyMiAwIDE4NFY0MEMwIDM1LjU3NCAzLjU4NCAzMiA4IDMySDE1MkMxNTYuNDQxIDMyIDE2MCAzNS41OTQgMTYwIDQwQzE2MCA0NC40MTggMTU2LjQyIDQ4IDE1MiA0OEgyNy4zMTJMMjI0IDI0NC42ODhMNDIwLjY4OCA0OEgyOTZDMjkxLjU4IDQ4IDI4OCA0NC40MTggMjg4IDQwQzI4OCAzNS41OSAyOTEuNTYxIDMyIDI5NiAzMkg0NDBDNDQ0LjQyNCAzMiA0NDggMzUuNTc4IDQ0OCA0MFYxODRDNDQ4IDE4OC40MjIgNDQ0LjQyIDE5MiA0NDAgMTkyQzQzNS41ODIgMTkyIDQzMi4wMDIgMTg4LjQyMiA0MzIuMDAyIDE4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowsMaximize(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M432.002 184V59.312L235.312 256L432.002 452.688V328C432.002 323.578 435.582 320 440 320C444.424 320 448 323.578 448 328V472C448 476.426 444.416 480 440 480H296C291.559 480 288 476.406 288 472C288 467.582 291.58 464 296 464H420.688L224 267.312L27.312 464H152C156.42 464 160 467.582 160 472C160 476.406 156.439 480 152 480H8C3.576 480 0 476.418 0 472V328C0 323.574 3.58 320 8 320C12.418 320 15.998 323.578 15.998 328V452.688L212.688 256L15.998 59.312V184C15.998 188.422 12.418 192 8 192C3.576 192 0 188.422 0 184V40C0 35.574 3.584 32 8 32H152C156.441 32 160 35.594 160 40C160 44.418 156.42 48 152 48H27.312L224 244.688L420.688 48H296C291.58 48 288 44.418 288 40C288 35.59 291.561 32 296 32H440C444.424 32 448 35.578 448 40V184C448 188.422 444.42 192 440 192C435.582 192 432.002 188.422 432.002 184Z" />
        </Icon>
    </>
}