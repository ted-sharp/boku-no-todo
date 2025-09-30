import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            BokuNoTodo
          </h1>
          <p className="text-gray-600">
            ぼくの考えた最強のTODOアプリ — AIアシスト
          </p>
        </header>

        <main className="bg-white rounded-lg shadow-sm p-6">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">✨</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              シンプル & 強力
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              音声入力とAIの力で、生産性を最大化するTODOアプリです。
              <br />
              複雑さを排除し、本当に必要な機能だけに集中しました。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🎙️</div>
                <h3 className="font-semibold text-gray-800">音声入力</h3>
                <p className="text-sm text-gray-600">
                  話すだけでタスクを作成
                </p>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-semibold text-gray-800">AIアシスト</h3>
                <p className="text-sm text-gray-600">
                  自動でタスクを分解・整理
                </p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl mb-2">⏰</div>
                <h3 className="font-semibold text-gray-800">ポモドーロ</h3>
                <p className="text-sm text-gray-600">
                  集中して効率的に作業
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-semibold text-gray-800">スケジューリング</h3>
                <p className="text-sm text-gray-600">
                  1日の計画を自動構築
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                開発中... 🚧
              </button>
            </div>
          </div>
        </main>

        <footer className="text-center mt-8 text-sm text-gray-500">
          <p>React + TypeScript + Rspack + Biome</p>
        </footer>
      </div>
    </div>
  );
}

export default App;