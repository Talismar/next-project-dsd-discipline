import Header from '@/components/Header'
import Image from 'next/image'
import logoSvg from '../../public/logo.svg'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Header isAuthenticated={false} />
      <main className="grid grid-cols-2">
        <section className="flex h-[calc(100vh-100px)] flex-col items-center bg-[#ECFAFF] pt-28">
          <h1 className="m-6 text-5xl font-bold text-[#8239F2]">
            Compartilhe suas dicas de leitura com os seus amigos
          </h1>
          <Image
            src={logoSvg}
            alt="Icon"
            width={298}
            className="mt-32"
            priority
          />
        </section>

        <section className="flex flex-col items-center justify-center gap-6">
          <form className="flex flex-col gap-6">
            <Input placeholder="E-mail" type="text" autoComplete="username" />
            <Input
              placeholder="Senha"
              type="password"
              autoComplete="current-password"
            />
            <Button variant="secondary">Entrar</Button>
          </form>

          <Button variant="secondary_outline">Esqueceu a senha?</Button>
          <Button variant="primary">Criar nova conta</Button>
        </section>
      </main>
    </div>
  )
}
