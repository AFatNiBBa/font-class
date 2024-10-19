
import { ComponentProps } from "solid-js";
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-right-and-arrow-down-left-from-center` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-and-arrow-down-left-from-center?s=thin arrow-up-right-and-arrow-down-left-from-center}
 * @preview ![arrow-up-right-and-arrow-down-left-from-center](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMTAuMjUzIDI5MC40NDFMMTUuOTkxIDQ4NC43MDJWMzQ0LjA3NkMxNS45OTEgMzM5LjY1OCAxMi40MTMgMzM2LjA3OSA3Ljk5NiAzMzYuMDc5QzMuNTc5IDMzNi4wNzkgMCAzMzkuNjUyIDAgMzQ0LjA3NlY1MDQuMDA2QzAgNTA4LjQyIDMuNTc1IDUxMiA3Ljk5NiA1MTJIMTY3LjkyNkMxNzIuMzY0IDUxMiAxNzUuOTIzIDUwOC40MSAxNzUuOTIzIDUwNC4wMDZDMTc1LjkyMyA0OTkuNTg4IDE3Mi4zNDQgNDk2LjAwOSAxNjcuOTI2IDQ5Ni4wMDlIMjcuMzAxTDIyMS41NjEgMzAxLjc1MUMyMjkuMDQ0IDI5NC4yNjYgMjE3LjczMSAyODIuOTYyIDIxMC4yNTMgMjkwLjQ0MVpNNTA0LjAwNCAwSDM0NC4wNzRDMzM5LjYzNiAwIDMzNi4wNzcgMy41ODggMzM2LjA3NyA3Ljk5NEMzMzYuMDc3IDEyLjQxMiAzMzkuNjU2IDE1Ljk5MSAzNDQuMDc0IDE1Ljk5MUg0ODQuNjk5TDI5MC40MzkgMjEwLjI1MUMyODIuOTc0IDIxNy43MTMgMjk0LjI1NCAyMjkuMDQ5IDMwMS43NDcgMjIxLjU1OUw0OTYuMDA5IDI3LjI5OFYxNjcuOTI0QzQ5Ni4wMDkgMTcyLjM0MiA0OTkuNTg3IDE3NS45MjEgNTA0LjAwNCAxNzUuOTIxQzUwOC40MjIgMTc1LjkyMSA1MTIgMTcyLjM0NiA1MTIgMTY3LjkyNFY3Ljk5NEM1MTIgMy41NzggNTA4LjQyNSAwIDUwNC4wMDQgMFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function ArrowUpRightAndArrowDownLeftFromCenter(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M210.253 290.441L15.991 484.702V344.076C15.991 339.658 12.413 336.079 7.996 336.079C3.579 336.079 0 339.652 0 344.076V504.006C0 508.42 3.575 512 7.996 512H167.926C172.364 512 175.923 508.41 175.923 504.006C175.923 499.588 172.344 496.009 167.926 496.009H27.301L221.561 301.751C229.044 294.266 217.731 282.962 210.253 290.441ZM504.004 0H344.074C339.636 0 336.077 3.588 336.077 7.994C336.077 12.412 339.656 15.991 344.074 15.991H484.699L290.439 210.251C282.974 217.713 294.254 229.049 301.747 221.559L496.009 27.298V167.924C496.009 172.342 499.587 175.921 504.004 175.921C508.422 175.921 512 172.346 512 167.924V7.994C512 3.578 508.425 0 504.004 0Z" />
        </Icon>
    </>
}