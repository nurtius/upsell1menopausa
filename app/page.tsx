"use client"

import { Check, X, AlertTriangle } from "lucide-react"

export default function UpsellPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/5 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            ⚡ Acelere seus resultados em 21 dias
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed text-pretty">
            Roteiro diário completo para reduzir fogachos mais rápido e recuperar energia em 3 semanas.
          </p>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Benefits */}
          <div className="bg-card rounded-xl p-6 border border-border">
            <h2 className="text-lg font-bold text-foreground mb-4 text-center">✅ Com o Plano 21 Dias</h2>
            <div className="space-y-3">
              {["Roteiro diário pronto", "Cardápio anti-calor", "Checklists práticos", "Resultados mais rápidos"].map(
                (benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <p className="text-sm font-medium">{benefit}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Risks */}
          <div className="bg-card rounded-xl p-6 border border-destructive/20">
            <h2 className="text-lg font-bold text-foreground mb-4 text-center">❌ Sem o plano</h2>
            <div className="space-y-3">
              {["Resultados mais lentos", "Falta de direcionamento", "Maior chance de desistir"].map((risk, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-4 h-4 text-destructive flex-shrink-0" />
                  <p className="text-sm font-medium">{risk}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-8 px-4 bg-secondary/20">
        <div className="max-w-sm mx-auto">
          <div className="bg-card rounded-xl p-6 border border-border text-center">
            <h2 className="text-xl font-bold text-foreground mb-4">O que você recebe</h2>

            <div className="space-y-2 mb-6 text-left">
              {["Agenda completa 21 dias", "Cardápio anti-calor", "Checklists diários", "Rotinas de autocuidado"].map(
                (item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <p className="text-sm">{item}</p>
                  </div>
                ),
              )}
            </div>

            <div className="mb-4">
              <p className="text-muted-foreground line-through text-sm">De R$97,00</p>
              <p className="text-3xl font-bold text-accent">R$17,00</p>
              <p className="text-xs text-muted-foreground">pagamento único</p>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3 mb-4">
              <p className="text-xs text-destructive font-medium flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                Oferta só nesta página
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-lg font-bold text-foreground mb-6">Quero acelerar meus resultados!</h2>

          <div style={{ width: "auto", maxWidth: "400px" }} className="mx-auto">
            <a href="javascript:void(0)" data-fornpay="ckfxxpqonv" className="fornpay_btn">
              SIM, EU ACEITO ESSA OFERTA
            </a>
            <a href="javascript:void(0)" data-downsell="https://up2.antimenopausa.site" className="fornpay_downsell">
              Vou recusar essa oferta
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 bg-muted/20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs text-muted-foreground mb-2">Compra 100% segura • 7 dias de garantia</p>
          <p className="text-sm font-medium">Teste sem risco: não gostou? Devolvemos seu dinheiro.</p>
        </div>
      </footer>

      {/* One-click script */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .fornpay_btn {
            background: #3d94f6;
            background-image: -webkit-linear-gradient(top, #3d94f6, #1e62d0);
            background-image: -moz-linear-gradient(top, #3d94f6, #1e62d0);
            background-image: -ms-linear-gradient(top, #3d94f6, #1e62d0);
            background-image: -o-linear-gradient(top, #3d94f6, #1e62d0);
            background-image: -webkit-gradient(to bottom, #3d94f6, #1e62d0);
            -webkit-border-radius: 10px;
            -moz-border-radius: 10px;
            border-radius: 10px;
            color: #fff;
            font-family: Arial;
            font-size: 18px;
            font-weight: 100;
            padding: 10px 20px;
            border: 1px solid #337fed;
            text-decoration: none;
            display: block;
            cursor: pointer;
            text-align: center
          }

          .fornpay_downsell {
            color: #004faa;
            font-family: Arial;
            margin-top: 10px;
            font-size: 16px!important;
            font-weight: 100;
            text-decoration: none;
            display: block;
            cursor: pointer;
            text-align: center
          }
        `,
        }}
      />

      {/* One-click script */}
      <script src="https://app.paradisepagbr.com/js/oneclick.js"></script>
    </div>
  )
}
