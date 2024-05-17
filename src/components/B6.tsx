import React, { useEffect } from 'react'

export default function B6() {
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            document.title = `Vị trí cuộn: ${scrollPosition}`;
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dignissimos enim voluptatem magni vitae ad temporibus autem, mollitia assumenda molestias repellat. Ipsa animi sunt hic non, excepturi a ab odit.
            Optio a est, quisquam molestiae impedit sit cumque non voluptas aperiam minima sapiente ea ratione, minus adipisci hic? Dolore at eligendi expedita quam ab nam rerum! Perspiciatis commodi voluptatem dicta.
            Quia natus totam reprehenderit provident quod delectus vitae dignissimos? Accusantium et omnis, fuga, cupiditate minima maiores dolore quod nemo vel voluptatibus facilis eos perspiciatis assumenda inventore enim suscipit, veniam sequi!
            Deleniti odio dolores velit accusamus, modi aut necessitatibus, molestiae animi maiores distinctio reprehenderit possimus adipisci et similique nihil officiis officia qui, reiciendis eius blanditiis quasi sit? Quidem officia deserunt alias.
            Nisi distinctio fuga nulla porro ut inventore deserunt animi nobis optio, magni aliquid magnam, consequuntur natus omnis alias iste quo maxime veniam, totam recusandae laborum! Laborum delectus ea atque? Vel.
            Repellat enim labore quos nulla perspiciatis, fugiat rem veritatis. Rem eligendi cumque animi. Vel odio magni eos impedit hic id, beatae commodi pariatur necessitatibus veniam. Laborum, beatae! Vitae, nobis dolorum!
            Tempore doloremque officia nostrum sint rem recusandae repellat animi cumque. Ipsam, facilis. Eos in dicta aspernatur dolore quibusdam debitis asperiores autem expedita. Ratione blanditiis libero reiciendis dolorum nulla, fugit laboriosam.
            Eaque aliquam repellat, dicta voluptate perferendis atque consequuntur veniam! Dolores vel dolorum repellendus facilis soluta hic, ex nam placeat reprehenderit odio non sapiente consectetur alias ducimus error a, accusamus recusandae?
            Error doloremque in nihil perspiciatis vero dolores itaque repudiandae officiis fuga quaerat. Totam, vitae error! Architecto quia ab iure fuga odit libero delectus labore. Reiciendis neque expedita soluta iusto sequi!
            Est hic unde mollitia ab explicabo nemo consectetur? Totam ratione asperiores autem odio fuga, quidem velit tempora voluptatem sequi vitae eius temporibus repellat commodi tenetur voluptatibus corporis eligendi, ad voluptatum.
            Nulla tenetur voluptates deserunt dolorum, ducimus voluptatem quaerat consectetur perferendis officia, veniam illo ex, repellendus doloremque ea. Quis repellat illo tempora, repudiandae ratione necessitatibus excepturi? Assumenda aperiam dolorem ut optio.
            Doloremque distinctio repellendus nisi fuga qui tempore. Ipsum aliquid, aperiam doloribus ratione numquam aut ducimus nesciunt nostrum mollitia atque, repudiandae tenetur asperiores laudantium illum tempora sed doloremque! Ea, voluptatum veritatis?
            Cupiditate officiis laudantium sed a accusantium amet vero molestiae ducimus, laboriosam consequuntur totam eveniet culpa perferendis doloribus rem tenetur, libero perspiciatis exercitationem praesentium corporis assumenda blanditiis nostrum mollitia. Maiores, aliquid?
            Nostrum in harum rerum eius dignissimos aperiam necessitatibus culpa dolorem obcaecati recusandae fugiat iusto accusantium reiciendis nesciunt eum voluptates delectus maiores perferendis quo impedit, veritatis placeat saepe odio tempora? Error!
            Nihil numquam labore maxime similique recusandae voluptas cumque impedit molestiae, repellat ipsum doloribus, soluta perferendis sunt aliquid qui iure eius culpa, sed ratione laboriosam necessitatibus rerum commodi doloremque voluptate. Obcaecati!
            Voluptatum consequuntur consequatur error nulla quidem recusandae dolore, repellendus, sint impedit fuga, non vel asperiores nesciunt nemo sunt labore officia voluptatibus ipsa adipisci reprehenderit quasi magni. Illo corrupti tempora accusamus?
            Facere earum iste voluptatem magni commodi non incidunt tempore aut! Reprehenderit accusamus facilis impedit itaque dicta fugiat aspernatur voluptate! Quo atque esse laudantium. Quae sint quidem quod nulla, perferendis esse!
            Optio, expedita doloribus. Asperiores distinctio ipsum a architecto sed amet unde id nemo? Optio deleniti accusamus natus nemo ducimus consequuntur reprehenderit quod earum voluptate, temporibus corporis sint et, veniam blanditiis.
            Est, odit similique! Error molestiae doloremque adipisci facilis cum vero tenetur dignissimos magnam expedita qui similique dolore molestias, illo perferendis quidem dolor fugit nemo aut animi suscipit dolorum. Pariatur, obcaecati?
            Labore vel eligendi veritatis modi blanditiis? Tenetur delectus libero culpa vel voluptate doloremque veritatis, aliquid accusantium enim voluptatum ipsam dignissimos. Placeat, corrupti! Et ratione nemo soluta vitae totam repellat dolorem?
            Officia temporibus, inventore, nulla neque repellendus, ullam sed nihil aliquam accusantium dolorum similique. Vero quia impedit esse temporibus, magnam eligendi doloremque molestias adipisci, porro culpa maiores accusantium laudantium alias consequuntur?
            Amet beatae asperiores quaerat voluptatem sequi cumque, aliquam tempore error commodi a impedit omnis magnam modi, aut, voluptas provident natus dolore. Eum ipsa nulla alias, adipisci dicta odio placeat similique.
            Illum officiis quis quos in impedit numquam neque omnis dolor voluptas quidem. Sit odit a aperiam, tempore in perferendis distinctio veniam eaque architecto quas esse iste possimus vel maxime dolore.
            Harum, repellendus quis. Architecto quidem earum omnis optio fugiat quos deleniti fugit magnam, vitae cupiditate nisi nam quibusdam at doloremque eos tempora saepe mollitia facilis ex ea similique quia! Molestias.
            Blanditiis nihil at vitae veritatis, quae velit. Deleniti id vero mollitia omnis reprehenderit soluta voluptas rerum obcaecati enim maiores laboriosam, atque est voluptatem esse officia totam consectetur, hic numquam fugit!
            Dolore vero nulla recusandae tenetur assumenda enim eveniet odio corrupti deleniti, reprehenderit praesentium ad officia quaerat ut beatae quasi aspernatur accusamus et aut? Incidunt modi magni laudantium, culpa est aspernatur!
            Velit unde temporibus inventore tempora laborum corrupti blanditiis. Obcaecati nemo suscipit quo omnis illo itaque exercitationem, et non. Asperiores omnis delectus ducimus repellat distinctio blanditiis a minima harum rerum debitis.
            Nulla eum pariatur placeat eligendi accusamus perspiciatis nostrum beatae optio sequi quos consequatur provident impedit inventore tempora magni tempore, recusandae omnis quia voluptatibus reiciendis nam? Accusamus optio porro qui. Tempore?
            Magnam optio veniam a qui dolorum impedit numquam cumque culpa, ea ad tempore deleniti velit accusamus explicabo natus illum nobis officiis quam mollitia sit blanditiis vel? Consequatur doloribus reiciendis magni.
            Molestias necessitatibus asperiores adipisci cupiditate tenetur rerum reprehenderit quo hic nisi! Architecto exercitationem reiciendis asperiores nemo ut est quos, ipsa repellat assumenda sapiente quisquam repudiandae autem porro obcaecati unde ipsum.
            Deleniti possimus sunt qui aperiam incidunt maxime accusamus, minima dolorem aliquid alias dolore hic magnam eaque assumenda, suscipit fugiat aspernatur recusandae voluptates repudiandae! Placeat, dolores quod quasi nihil officia possimus!
            Quas aliquam voluptates tenetur quaerat iusto non quos facere soluta? Laboriosam, perspiciatis. Impedit, beatae odio odit cupiditate totam atque ab velit, provident modi fugit, magni quaerat sed harum ut aliquid.
            Vero praesentium quibusdam dignissimos tempore mollitia dicta id aperiam eaque deleniti dolor atque, similique tenetur pariatur recusandae! Ipsa beatae, libero unde asperiores esse debitis nam sapiente exercitationem eum repellat animi.
            Dignissimos incidunt assumenda asperiores blanditiis sapiente accusantium consectetur vel voluptate nostrum libero provident, beatae dolorem. Quaerat perspiciatis a porro ut magnam delectus ipsum, commodi atque ratione repellat, molestiae possimus dolorum.
            Nisi quas sunt est quibusdam dolores nulla quod deserunt reiciendis sapiente debitis magni ipsa distinctio ad atque nesciunt totam perspiciatis, repellendus aperiam laudantium? Debitis quod autem a optio quidem iste!</p>
    </div>
  );
}
