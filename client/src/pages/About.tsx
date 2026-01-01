import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Cpu, Microscope, Code } from "lucide-react";

export default function About() {
  const skills = [
    { icon: Gamepad2, name: "遊戲評測", color: "text-primary" },
    { icon: Cpu, name: "硬體分析", color: "text-accent" },
    { icon: Microscope, name: "深度研究", color: "text-chart-2" },
    { icon: Code, name: "技術解析", color: "text-chart-3" },
  ];

  const techStack = [
    "遊戲引擎", "顯示卡技術", "處理器架構", "VR/AR", 
    "AI 運算", "雲端遊戲", "RGB 外設", "機械鍵盤"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold font-tech bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                關於我
              </h1>
              <p className="text-lg text-muted-foreground">
                探索科技與遊戲的無限可能
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30" />
                      <img
                        src="/attached_assets/generated_images/Author_profile_photo_a4259f31.png"
                        alt="李泓德"
                        className="relative w-48 h-48 rounded-full object-cover border-4 border-card"
                        data-testid="img-author"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">李泓德 Li Hongde</h2>
                      <p className="text-muted-foreground">
                        科技評測作者 / 遊戲愛好者
                      </p>
                    </div>

                    <div className="space-y-4">
                      <p className="leading-relaxed">
                        你好！我是李泓德，一位熱愛遊戲與科技的學生創作者。從小對電腦硬體充滿好奇，
                        到現在深入研究最新的遊戲技術與科技產品，我希望透過這個部落格與大家分享我的發現與見解。
                      </p>
                      <p className="leading-relaxed">
                        我的文章涵蓋遊戲評測、硬體分析、科技趨勢等多個領域，力求以深入淺出的方式，
                        讓更多人了解科技產品背後的原理與價值。無論你是硬核玩家還是科技愛好者，
                        都能在這裡找到有價值的內容。
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 p-3 rounded-md border hover-elevate"
                        >
                          <skill.icon className={`h-5 w-5 ${skill.color}`} />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">專業領域</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">聯絡方式</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>📧 Email: hongde.li@example.com</p>
                  <p>🎮 Discord: LiHongde#0001</p>
                  <p>🐦 Twitter: @LiHongdeTech</p>
                  <p>💻 GitHub: @lihongde</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
