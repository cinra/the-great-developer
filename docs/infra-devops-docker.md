# インフラストラクチャー > Dev/Ops > Docker


## 解説

前提として、[仮想化技術](https://cinra.github.io/the-great-developer/docs/infra-devops-vagrant)について学んでおくと、入りやすいかと思います。

[こちら](http://qiita.com/pottava/items/7086f9d63487aa3d7d08)の記事が、
順を追って説明されていて分かりやすいです。

---

## 課題

### 準備

- [ ] プロジェクトテンプレートをクローンする

### 実践

- [ ] CLI上で、プロジェクトテンプレートのパスまで移動し、Dockerのホストマシンを作成します。
- [ ] マシンが正常に作成されているか、確認します。
- [ ] 環境変数を定義します。
- [ ] マシンを起動します。
- [ ] マシンを止めます。
- [ ] マシンを削除します。

---

## コマンド解説

### docker-machine create

Dockerのホストマシンを作成します。
`--driver`オプションには基本的に`virtualbox`を指定します。
`[name]`部分は、任意で名前を付けます。

```
$ docker-machine create --driver virtualbox [name]
```

### docker-machine ls

作成済のDockerのホストマシンの一覧を表示します。
また、立ち上げの状態なども同時に表示されます。

### 環境変数を定義する

`[name]`はcreateで定義したネームに置き換えます。

```
eval $(docker-machine env [name])
```

### docker-machine start [name]

マシンをスタートさせます。
`[name]`は、createで定義したネームに置き換えます。

止める時は、以下です。

```
$ docker-machine stop [name]
```

### docker-machine ssh [name]

マシンにsshします。

### docker-machine rm [name]

マシンを削除します。

---

## 参考リンク

- [DockerMachineコマンドラインリファレンス - 公式](https://docs.docker.com/machine/reference/)