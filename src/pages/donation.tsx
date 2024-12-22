import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import CommonHead from "../components/CommonHead";
import ActionButton from "../components/ActionButton";

export default function DonationPage() {
	return (
		<>
			<GlobalHeader />
			<div className="container mx-auto px-4 pt-16 pb-12">
				<h1 className="text-4xl">ご寄付・ご協賛のお願い</h1>
			</div>
			<StaticImage
				alt=""
				src="../images/donation-header.jpg"
				class="w-full h-48"
				imgClassName="object-bottom"
			/>
			<main className="container mx-auto px-4 py-16">
				<div className="prose max-w-none">
					<p>
						ut.code(); は、学生の手で自主的に運営されている団体です。
						多くの方にソフトウェア開発の魅力を知っていただくため、活動はすべて無償で行っています。
						現在のところ活動資金は寄付によって賄われていますが、十分とはいえない状況です。
						皆様のご支援をいただけますと幸いです。
					</p>
					<h2>協賛による支援</h2>
					<p>
						ut.code();は、ウェブサイトにご協賛いただいた企業様のロゴを掲載しております。
					</p>
					<h2>ご寄付による支援</h2>
					<p>
						ご寄付いただける方は、以下の口座にお振込みください。
						誤操作の防止と、感謝の気持ちをお伝えするため、事前にご一報いただけますと幸いです。
					</p>
					<ul>
						<li>金融機関: 三菱 UFJ 銀行 (0005)</li>
						<li>支店: 本郷 (351)</li>
						<li>口座番号: 0339615</li>
					</ul>
					<div className="not-prose">
						<ActionButton to="/contact/">ut.code(); の連絡先</ActionButton>
					</div>
					<h2>使用しなくなったノートパソコンの譲渡</h2>
					<p>
						ut.code();
						では例年、五月祭・駒場祭で外部のお客様向けにプログラミングを学ぶことのできる企画を行っています。
						この企画では、皆様に気軽にお越しいただけるよう、会場内でノートパソコンを貸し出しています。
						各々が持ち寄ったノートパソコンを使用してはいますが、それだけでは台数が足りないため、外部の事業者にレンタルを依頼せざるを得ず、その費用負担が問題となっています。
					</p>
					<p>
						そこで、ut.code();
						では、使用しなくなったノートパソコンを譲渡していただける方を募集しています。
						保存されているデータは幣団体で削除する処理を行いますが、情報漏洩については責任を負うことができませんので、送付前にデータの削除をお願いいたします。
					</p>
					<div className="not-prose">
						<ActionButton to="/contact/">ut.code(); の連絡先</ActionButton>
					</div>
					<h2>ご支援いただいた皆様</h2>
					<ul>
						<li>2024/3/11 コウノマサノリ様</li>
					</ul>
				</div>
			</main>
			<GlobalFooter />
		</>
	);
}

export function Head() {
	return <CommonHead title="ご寄付・ご協賛のお願い" />;
}
