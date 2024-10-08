import { css } from "@emotion/react"

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      css={css`
        max-width: 960px;
        margin: 0 auto;
        padding: 1rem;
      `}
    >
      {children}
    </div>
  )
}
